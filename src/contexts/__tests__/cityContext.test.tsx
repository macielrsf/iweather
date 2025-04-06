import { CityProvider } from "@contexts/CityContext";
import { useCity } from "@hooks/useCity";
import { act, renderHook, waitFor } from "@testing-library/react-native";

describe("Context: CityContext", () => {
  it("should be able to change the city selected", async () => {
    const { result } = renderHook(() => useCity(), { wrapper: CityProvider });

    await waitFor(() =>
      act(() =>
        result.current.handleChanceCity({
          id: "1",
          name: "São Paulo",
          longitude: -23.5505,
          latitude: -46.6333,
        })
      )
    );

    expect(result.current.city?.name).toBe("São Paulo");
  });
});
