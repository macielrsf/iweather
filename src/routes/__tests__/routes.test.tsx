import { Routes } from "@routes/index";
import { removeStorageCity, saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { render, waitFor, screen, act } from "@__tests__/utils/customRender";
import { api } from "@services/api";
import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse";
describe('Routes', () => {
    it('should be able to render Search Screen when city is not selected', async () => {
        render(<Routes />);

        const title = await waitFor(() => screen.findByText(/^Escolha um local/i));

        expect(title).toBeTruthy();
    });

    it('should be able to render Dashboard Screen when city is selected', async () => {
        jest.spyOn(api, 'get').mockResolvedValue({
            data: mockWeatherAPIResponse
        });

        const city = {
            id: '1',
            name: 'São Paulo',
            latitude: -23.5505,
            longitude: -46.6333,
        };

        await saveStorageCity(city);

        render(<Routes />);

        const title = await waitFor(() => screen.findByText(city.name));

        await removeStorageCity();

        expect(title).toBeTruthy();
    });
});