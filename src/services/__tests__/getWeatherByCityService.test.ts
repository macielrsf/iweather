import { api } from '@services/api';
import { mockWeatherAPIResponse } from '@__tests__/mocks/api/mockWeatherAPIResponse';
import { getWeatherByCityService } from '@services/getWeatherByCityService';

describe('Service: getWeatherByCityService', () => {
    it('should be able to return weather api data formatted', async () => {
        jest.spyOn(api, 'get').mockResolvedValue({data: mockWeatherAPIResponse});

        const response = await getWeatherByCityService({ latitude: -22.90556, longitude: -47.06083 });

        expect(response).toHaveProperty('today');
    });
});