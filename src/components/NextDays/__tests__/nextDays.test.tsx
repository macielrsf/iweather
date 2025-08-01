import { render, screen } from "@testing-library/react-native";
import { NextDays } from "@components/NextDays";

import clearDay from "@assets/clear_day.svg";

describe("Component: NextDays", () => {
  it("should be able to render correctly", () => {
    render(
      <NextDays
        data={[
          {
            day: "Segunda",
            icon: clearDay,
            max: "30°",
            min: "20°",
            weather: "Ensolarado",
          },
          {
            day: "Terça",
            icon: clearDay,
            max: "30°",
            min: "20°",
            weather: "Ensolarado",
          },
          {
            day: "Quarta",
            icon: clearDay,
            max: "30°",
            min: "20°",
            weather: "Ensolarado",
          },
          {
            day: "Quinta",
            icon: clearDay,
            max: "30°",
            min: "20°",
            weather: "Ensolarado",
          },
          {
            day: "Sexta",
            icon: clearDay,
            max: "30°",
            min: "20°",
            weather: "Ensolarado",
          },
        ]}
      />
    );
    expect(screen.getByText("Segunda")).toBeTruthy();
  });
});