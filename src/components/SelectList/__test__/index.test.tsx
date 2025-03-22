import { fireEvent, render } from "@testing-library/react-native";
import { SelectList } from "@components/SelectList";

describe("Component: SelectList", () => {
  it("should be able to return city details when a city is selected", () => {
    const data = [
        {
          id: "1",
          name: "Campinas",
          latitude: -22.90556,
          longitude: -47.06083,
        },
        {
          id: "2",
          name: "São Paulo",
          latitude: -23.5475,
          longitude: -46.63611,
        },
        {
          id: "3",
          name: "Rio de Janeiro",
          latitude: -22.9035,
          longitude: -43.2096,
        },
      ];

    const onPress = jest.fn();

    const { debug, getByText } = render(
      <SelectList data={data} onChange={() => {}} onPress={onPress} />
    );

    const selectedCity = getByText(/campinas/i);

    fireEvent.press(selectedCity);

    expect(onPress).toHaveBeenCalledWith(data[0]);
  });

  it('not should be able to show options when data props is empty', () => {
    const {getByTestId} = render(
        <SelectList data={[]} onChange={() => {}} onPress={() => {}} /> 
    )

    const options = getByTestId('options');

    expect(options.children.length).toBe(0);
  });
});
