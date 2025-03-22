import { api } from "@services/api";
import { getCityByNameService } from "@services/getCityByNameService";
import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";

describe('Service: getCityByNameService', () => {
    it('should be able to return city details', async () => {
        const data = mockCityAPIResponse;

        jest.spyOn(api, 'get').mockResolvedValue({data});

        const response = await getCityByNameService('Campinas');

        expect(response.length).toBeGreaterThan(0);
    });
});