import React from "react";
import { Rarity, Header, Text, List, Item } from "../Styled";

const Mulligan = () => {
  return (
    <>
      <Header id="mulligan">Mulligan Guide</Header>
      <Text>
        As an OTK deck, looking for card draw in the mulligan is essential to
        winning the game, especially against more control oriented decks.
      </Text>
      <List>
        <Item>
          General Mulligan: <Rarity>Illidary Studies</Rarity>,{" "}
          <Rarity>Double Jump</Rarity>.
        </Item>
        <Item>
          Against Aggro: <Rarity>Chaos Strike</Rarity>,{" "}
          <Rarity>Immolation Aura</Rarity>.
        </Item>
        <Item>
          Against Control: <Rarity r="rare">Skill Of Gul`dan</Rarity>.
        </Item>
      </List>
    </>
  );
};

export default Mulligan;
