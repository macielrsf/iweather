import { render, screen } from "@testing-library/react-native";
import { Day } from "@components/Day";

import clearDay from "@assets/clear_day.svg";

describe("Component: Day", () => {
  it("should be able to render correctly", () => {
    const {debug} = render(
      <Day
        data={{
          day: "Segunda",
          icon: clearDay,
          max: "30°",
          min: "20°",
          weather: "Ensolarado",
        }}
      />
    );

    expect(screen.getByText("Segunda")).toBeTruthy();
  });
});
