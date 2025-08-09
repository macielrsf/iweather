import { api } from "@services/api";
import { Dashboard } from "@screens/Dashboard";
import { render, screen, waitFor, waitForElementToBeRemoved, fireEvent, act } from "@__tests__/utils/customRender";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";
import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse";

describe("Screen: Dashboard", () => {
  beforeAll(async () => {
    jest.spyOn(api, 'get').mockResolvedValue({data: mockWeatherAPIResponse});

    const city = {
        id: "1",
        name: "Rio do Sul, BR",
        latitude: -23.5505,
        longitude: -46.6333
    };

    await saveStorageCity(city);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should be able to show city weather", async () => {
    render(<Dashboard />);
    
    const cityName = await waitFor(() => screen.findByText(/rio do sul/i));

    expect(cityName).toBeTruthy();
  });

  it("should be able to show another city weather", async () => {
    /*
     * 1 - Buscas as informações do tempo/clima da cidade selecionada
     * 2 - Busca as informações da nova cidade selecionada 
     * 3 - Buscas as informações do tempo/clima da nova cidade selecionada
    */
   jest.spyOn(api, 'get')
   .mockResolvedValueOnce({data: mockWeatherAPIResponse})
   .mockResolvedValueOnce({data: mockCityAPIResponse})
   .mockResolvedValueOnce({data: mockWeatherAPIResponse});

    render(<Dashboard />);

    await waitForElementToBeRemoved(() => screen.getByTestId("loading-indicator"));

    const cityName = "São Paulo";

    await waitFor(() => act(async () => {
        const search = screen.getByTestId("search-input");
        fireEvent.changeText(search, cityName);
    }));

    await waitFor(() => act(async () => {
      fireEvent.press(screen.getByText(cityName, {exact: false}));
    }));

    expect(screen.getByText(cityName, {exact: false})).toBeTruthy();
  });
});