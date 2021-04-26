import React from "react";
import styled from "styled-components";
import { Rarity, Header, SubHeader } from "../Styled";

const CardList = () => {
  return (
    <>
      <Header id="deck">Card List</Header>
      <SubHeader id="demon-hunter-cards">Demon Hunter Cards</SubHeader>
      <Card>
        <Mana>1</Mana>
        <CardBox name="double-jump">
          <CardTitle>
            <Rarity n>Double Jump</Rarity>
          </CardTitle>
        </CardBox>
        <Number>2</Number>
      </Card>
      <Card>
        <Mana>1</Mana>
        <CardBox name="felosophy">
          <CardTitle>
            <Rarity n r="epic">
              Felosophy
            </Rarity>
          </CardTitle>
        </CardBox>
        <Number>2</Number>
      </Card>
      <Card>
        <Mana>1</Mana>
        <CardBox name="felscream-blast">
          <CardTitle>
            <Rarity n>Felscream Blast</Rarity>
          </CardTitle>
        </CardBox>
        <Number>2</Number>
      </Card>
      <Card>
        <Mana>1</Mana>
        <CardBox name="illidari-studies">
          <CardTitle>
            <Rarity n>Illidari Studies</Rarity>
          </CardTitle>
        </CardBox>
        <Number>2</Number>
      </Card>
      <Card>
        <Mana>2</Mana>
        <CardBox name="chaos-strike">
          <CardTitle>
            <Rarity n>Chaos Strike</Rarity>
          </CardTitle>
        </CardBox>
        <Number>2</Number>
      </Card>
      <Card>
        <Mana>2</Mana>
        <CardBox name="immolation-aura">
          <CardTitle>
            <Rarity n>Immolation Aura</Rarity>
          </CardTitle>
        </CardBox>
        <Number>2</Number>
      </Card>
      <Card>
        <Mana>2</Mana>
        <CardBox name="spectral-sight">
          <CardTitle>
            <Rarity n>Spectral Sight</Rarity>
          </CardTitle>
        </CardBox>
        <Number>2</Number>
      </Card>
      <Card>
        <Mana>3</Mana>
        <CardBox name="acrobatics">
          <CardTitle>
            <Rarity n>Acrobatics</Rarity>
          </CardTitle>
        </CardBox>
        <Number>1</Number>
      </Card>
      <Card>
        <Mana>3</Mana>
        <CardBox name="aldrachi-warblades">
          <CardTitle>
            <Rarity n>Aldrachi Warblades</Rarity>
          </CardTitle>
        </CardBox>
        <Number>2</Number>
      </Card>
      <Card>
        <Mana>3</Mana>
        <CardBox name="eye-beam">
          <CardTitle>
            <Rarity n r="epic">
              Eye Beam
            </Rarity>
          </CardTitle>
        </CardBox>
        <Number>2</Number>
      </Card>
      <Card>
        <Mana>4</Mana>
        <CardBox name="il-gynoth">
          <CardTitle>
            <Rarity n r="legendary">
              Il'gynoth
            </Rarity>
          </CardTitle>
        </CardBox>
        <Number>1</Number>
      </Card>
      <Card>
        <Mana>4</Mana>
        <CardBox name="raging-felscreamer">
          <CardTitle>
            <Rarity n>Raging Felscreamer</Rarity>
          </CardTitle>
        </CardBox>
        <Number>2</Number>
      </Card>
      <Card>
        <Mana>6</Mana>
        <CardBox name="skull-of-gul-dan">
          <CardTitle>
            <Rarity n r="rare">
              Skull of Gul`dan
            </Rarity>
          </CardTitle>
        </CardBox>
        <Number>2</Number>
      </Card>
      <SubHeader id="neutral-cards">Neutral Cards</SubHeader>
      <Card>
        <Mana>2</Mana>
        <CardBox name="bloodmage-thalnos">
          <CardTitle>
            <Rarity n r="legendary">
              Bloodmage Thalnos
            </Rarity>
          </CardTitle>
        </CardBox>
        <Number>1</Number>
      </Card>
      <Card>
        <Mana>2</Mana>
        <CardBox name="mo-arg-artificer">
          <CardTitle>
            <Rarity n r="epic">
              Mo`arg Artificer
            </Rarity>
          </CardTitle>
        </CardBox>
        <Number>2</Number>
      </Card>
      <Card>
        <Mana>2</Mana>
        <CardBox name="talented-arcanist">
          <CardTitle>
            <Rarity n>Talented Arcanist</Rarity>
          </CardTitle>
        </CardBox>
        <Number>2</Number>
      </Card>
      <Card>
        <Mana>3</Mana>
        <CardBox name="deaths-head-cultist">
          <CardTitle>
            <Rarity n>Death's Head Cultist</Rarity>
          </CardTitle>
        </CardBox>
        <Number>1</Number>
      </Card>
    </>
  );
};

export default CardList;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 20rem;
  margin-bottom: 0.2rem;
`;

const Mana = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: hsl(220, 54%, 50%, 1);
  color: white;
  font-size: 130%;
  font-weight: bold;
`;

const CardTitle = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.25) 0px,
    rgba(0, 0, 0, 1) 150px,
    rgba(0, 0, 0, 1) 100%
  );
  height: 100%;
  width: 100%;
  padding: 0 0.5rem;
`;

const CardBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-image: ${({ name }) =>
    'url("//static.icy-veins.com/images/hearthstone/tiles/' + name + '.jpg")'};
  background-color: hsl(89, 80%, 31%, 1);
  font-size: 110%;
  height: 40px;
  width: 15rem;
`;

const Number = styled(Mana)`
  background-color: black;
`;
