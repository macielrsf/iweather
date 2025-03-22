import { getStorageCity, saveStorageCity, removeStorageCity } from "../cityStorage";
import { CityProps } from "@services/getCityByNameService";

describe("Storage: cityStorage", () => {
    const newCity: CityProps = {
        id: '1',
        name: 'São Paulo',
        latitude: -23.5489,
        longitude: -46.6388
    };

    it('should be able to return null when dont have city in storage', async () => {
        const response = await getStorageCity();
        expect(response).toBeNull();
    });

    it('should be able to return city storaged', async () => {
        await saveStorageCity(newCity);
        const response = await getStorageCity();
        expect(response).toEqual(newCity);
    });

    it('should be able to remove city storaged', async () => {
        await saveStorageCity(newCity);
    
        await removeStorageCity();

        const response = await getStorageCity();

        expect(response).toBeNull();
    });
});