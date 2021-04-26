import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { closeModal } from "../Redux/Actions";

const Modal = (props) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };

  if (props?.isModalOpen) {
    return (
      <Container>
        <TextContainer>
          <Header>{props?.header || "Welcome"}</Header>
          {props?.subHeader && (
            <SubHeader>{props?.subHeader || "I am your assistant"}</SubHeader>
          )}
          <Text>
            {props?.text ||
              "This is a short tutorial, meant to guide you while exploring this website."}
          </Text>
          <Span>{props?.text2 || "Press the "}</Span>
          <Span color="var(--secondary-color)" fontSize="1.6rem">
            {props?.text2 || "Next "}
          </Span>
          <Span>{props?.text3 || "button if you wish to learn more."}</Span>
        </TextContainer>
        <ActionsContainer>
          <Button
            variation="disabled"
            isClose={true}
            clickHandler={handleClose}
          >
            {props?.close || "Close"}
          </Button>
          <ModalActions>
            <Button variation={props?.prevVariation || "disabled"}>
              <ArrowBack style={{ marginRight: "1rem" }} />
              {props?.prev || "Prev"}
            </Button>
            <Button
              variation={props?.nextVariation || "text"}
              clickHandler={props?.nextHandler}
              marginRight="0rem"
            >
              {props?.next || "Next"}
              <ArrowForward fontSize="large" style={{ marginLeft: "1rem" }} />
            </Button>
          </ModalActions>
        </ActionsContainer>
      </Container>
    );
  } else {
    return null;
  }
};

export default Modal;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(calc(-50%), calc(-100% - 10vh));
  border-radius: 1rem;
  width: clamp(35rem, 40rem, 40rem);
  background-color: white;

  @media only screen and (min-width: 768px) {
    width: clamp(45rem, 50rem, 50rem);
    transform: translate(calc(-50%), calc(-50% - 16vw));
  }
`;

const TextContainer = styled.div`
  padding: 0 2rem;
`;

const Header = styled.h1`
  font-size: 3.4rem;
  line-height: 1.2;
  margin-bottom: 2rem;
  border-bottom: 3px solid var(--primary-color);
  margin-right: 67%;
`;

const SubHeader = styled.h3`
  font-size: 2rem;
`;

const Text = styled.p`
  font-size: 1.4rem;
`;

const Span = styled.span`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.4rem")};
  color: ${({ color }) => (color ? color : "var(--primary-dark)")};
`;

const ActionsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ModalActions = styled.div`
  display: flex;
`;
