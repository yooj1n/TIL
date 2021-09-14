import React from "react";
import sanitizeHtml from "sanitize-html";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FatText } from "../shared";
import { Link } from "react-router-dom";

const CommentContainer = styled.div``;
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

function Comment({ author, payload }) {
  return (
    <CommentContainer>
      <FatText>{author}</FatText>
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
    </CommentContainer>
  );
}

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  payload: PropTypes.string.isRequired,
};

export default Comment;