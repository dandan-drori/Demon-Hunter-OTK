import React from "react";
import { Rarity, Header, SubHeader, Text, List, Item, Bold } from "../Styled";

const DeckStrategy = () => {
  return (
    <>
      <Header id="strategy">Deck Strategy</Header>
      <Text>
        Throughout most of the game, your aim should be to use your mana
        efficiently to draw as many cards as possible.
        <br /> Your removal supply is limited, so use it sparsely.
        <br /> Cards like <Rarity>Immolation Aura</Rarity> and{" "}
        <Rarity r="epic">Eye Beam</Rarity> can be used in combination with{" "}
        <Rarity r="epic">Mo'arg Artificer</Rarity> or{" "}
        <Rarity>Talented Arcanist</Rarity> to deal large amounts of damage to a
        big board or a single target while also healing you back.
        <br /> Just don't forget to copy your second{" "}
        <Rarity r="epic">Mo'arg Artificer</Rarity> using{" "}
        <Rarity r="epic">Felosophy</Rarity> before using it as a removal tool,
        since it is needed to perform the OTK.
      </Text>
      <SubHeader id="otk">The OTK</SubHeader>
      <Text>
        Performing the OTK can be done in many different ways, requiring
        different amounts of mana and dealing different amounts of damage, but
        each time it will have 3 core components:
        <br />
      </Text>
      <List>
        <Item>
          <Rarity r="legendary">Il`gynoth</Rarity>
        </Item>
        <Item>Spell Empowerment</Item>
        <Item>Lifesteal Spell</Item>
      </List>
      <Text>
        The first part of the combo is to simply play{" "}
        <Rarity r="legendary">Il`gynoth</Rarity>, usually for 4 mana.
        <br />
        You should then play a combination of{" "}
        <Rarity r="epic">Mo'arg Artificer</Rarity> and Spell Damage minions.
      </Text>
      <Text>
        (Sidenote - for calculation purposes, Spell Damage is applied){" "}
        <Bold>BEFORE</Bold> <Rarity r="epic">Mo'arg Artificer</Rarity>'s effect.
      </Text>
      <Text>
        Lastly, you require a Lifesteal Spell to utilise the previous 2
        components.
        <br />
        This should ideally be <Rarity>Felscream Blast</Rarity> due to Spell
        Damage having a greater effect on it, but{" "}
        <Rarity r="epic">Eye Beam</Rarity> can also work, or even a mix of both.
      </Text>
      <Text>
        It's important to note here, that even if your{" "}
        <Rarity r="legendary">Il`gynoth</Rarity> or{" "}
        <Rarity r="epic">Mo'arg Artificer</Rarity>s die from the spell, their
        effect will still take place, allowing you to target your own minions in
        case they are the only ones on the board.
      </Text>
      <SubHeader id="tips">Final Tips</SubHeader>
      <Text>
        Against Aggro, you should put a lot more emphasis on simply surviving.
        The large amount of Lifesteal in the deck can simply be used to overcome
        your opponent's aggression until they run out of cards. When your
        opponent is low on cards, you can simply finish them off using any
        weapons and spells you have available.
      </Text>
      <Text>
        Against Control decks, especially those that can gain Armor, you should
        try to maximise the damage your combo can do. This largely involves
        using as many <Rarity r="epic">Mo'arg Artificer</Rarity>s as possible
        and not wasting any throughout the game as their damage can grow
        exponentially.
      </Text>
    </>
  );
};

export default DeckStrategy;
