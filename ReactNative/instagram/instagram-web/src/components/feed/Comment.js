import sanitizeHtml from "sanitize-html";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FatText } from "../shared";

const CommentContainer = styled.div``;
const CommentCaption = styled.span`
  margin-left: 10px;
  mark {
    background-color: inherit;
    color: ${(props) => props.theme.accent};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

function Comment({ author, payload }) {
  // allowed 된 태그들만 html로 해석될 수 있도록 만들어줌
  const cleanedPayload = sanitizeHtml(
    payload.replace(/#[\w]+/g, "<mark>$&</mark>"),
    {
      allowedTags: ["mark"],
    }
  );
  return (
    <CommentContainer>
      <FatText>{author}</FatText>
      {/* 이 prop은 텍스트가 아니라 html로 해석될 수 있도록 만들어줌 */}
      <CommentCaption dangerouslySetInnerHTML={{
        __html: cleanedPayload,
      }}
      />
    </CommentContainer>
  );
}

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  payload: PropTypes.string.isRequired,
};

export default Comment;