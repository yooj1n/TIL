import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FatText } from "../shared";
import { Link } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


const DELETE_COMMENT_MUTATION = gql`
  mutation deleteComment($id: Int!) {
    deleteComment(id: $id) {
      ok
    }
  }
`;

const CommentContainer = styled.div`
  margin-bottom: 7px;
  display: flex;
  button {
    margin-left: 30px;
    font-size: 12px;
    background-color: inherit;
    border: none;
    color:${(props) => props.theme.fontColor};
  }
`;

const CommentCaption = styled.span`
  margin-left: 10px;
  a {
    background-color: inherit;
    color: ${(props) => props.theme.accent};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

function Comment({ id, photoId, isMine, author, payload }) {
  const updateDeleteComment = (cache, result) => {
    const {
      data: {
        deleteComment: { ok },
      },
    } = result;
    if (ok) {
      //해당 데이터를 cache에서 삭제
      cache.evict({ id: `Comment:${id}` });
      cache.modify({
        id: `Photo:${photoId}`,
        fields: {
          commentNumber(prev) {
            return prev - 1;
          },
        },
      });
    }
  };
  const [deleteCommentMutation] = useMutation(DELETE_COMMENT_MUTATION, {
    variables: {
      id,
    },
    update: updateDeleteComment,
  });
  const onDeleteClick = () => {
    deleteCommentMutation();
  };
  return (
    <CommentContainer>
      <Link to ={`/users/${author}`}>
        <FatText>{author}</FatText>
      </Link>
      <CommentCaption>
        {/* sanitizeHtml과 dangerouslySetInnerHTML를 이용하여 parsing하면 클릭하여 링크로 보내기 힘들다*/}
        {payload.split(" ").map((word, index) =>
          /#[\w]+/.test(word) ? (
            //기본적인 fragment <>에는 key를 줄 수 없어 React에서 제공하는 Fragment를 사용한다.
            <React.Fragment key={index}>
              <Link to={`/hashtags/${word}`}>{word}</Link>{" "}
            </React.Fragment>
          ) : (
            <React.Fragment key={index}>{word} </React.Fragment>
          )
        )}
      </CommentCaption>
      {isMine ? <button onClick={onDeleteClick}><FontAwesomeIcon icon={faTrash}/></button> : null}
    </CommentContainer>
  );
}

Comment.propTypes = {
  id:PropTypes.number,
  isMine: PropTypes.bool,
  photoId: PropTypes.number,
  author: PropTypes.string.isRequired,
  payload: PropTypes.string.isRequired,
};

export default Comment;