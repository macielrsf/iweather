import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse";
import { api } from "@services/api";
import { Dashboard } from "@screens/Dashboard";
import { render, screen, waitFor } from "@__tests__/utils/customRender";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";

describe("Screen: Dashboard", () => {
  it("should be able to show city weather", async () => {
    jest.spyOn(api, 'get').mockResolvedValue({data: mockWeatherAPIResponse});

    const city = {
        id: "1",
        name: "Rio do Sul, BR",
        latitude: -23.5505,
        longitude: -46.6333
    };

    await saveStorageCity(city);
    
    render(<Dashboard />);
    
    const cityName = await waitFor(() => screen.findByText(/rio do sul/i));

    expect(cityName).toBeTruthy();
  });
});