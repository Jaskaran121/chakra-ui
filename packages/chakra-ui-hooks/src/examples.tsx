import { storiesOf } from "@storybook/react";
import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/theme";
import useDisclosure from "./useDisclosure";
import useCheckboxGroup from "./useCheckboxGroup";
import useRadioGroup from "./useRadioGroup";

const stories = storiesOf("Hooks", module);

stories.addDecorator(story => (
  <ThemeProvider>
    <CSSReset />
    {story()}
  </ThemeProvider>
));

function Test() {
  const disclosure = useDisclosure({ defaultIsOpen: true });
  return (
    <>
      <button onClick={disclosure.onToggle}>Click</button>
      <p>{String(disclosure.isOpen)}</p>
    </>
  );
}

stories.add("useDisclosure", () => <Test />);

export function CheckExample(props: any) {
  const checkboxGroup = useCheckboxGroup(props);
  return (
    <div>
      {["opt1", "opt2", "opt3"].map(val => (
        <input
          type="checkbox"
          value={val}
          checked={checkboxGroup.value.includes(val)}
          onChange={checkboxGroup.onChange}
        />
      ))}
    </div>
  );
}
stories.add("useCheckboxGroup", () => (
  <CheckExample
    defaultValue={["opt1"]}
    onChange={(val: any) => console.log(val)}
  />
));

export function RadioExample(props: any) {
  const radio = useRadioGroup(props);
  return (
    <div>
      {["opt1", "opt2", "opt3"].map(val => (
        <input
          type="radio"
          value={val}
          checked={radio.value === val}
          onChange={radio.onChange}
          name={radio.name}
        />
      ))}
    </div>
  );
}

stories.add("useRadioGroup", () => (
  <RadioExample
    defaultValue={"opt1"}
    onChange={(val: any) => console.log(val)}
  />
));