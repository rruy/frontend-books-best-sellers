import { APIService } from '../api-service';

export async function getBookDetail({ name }) {
  /**
   * Verificar qual é o endpoint correto para filtrar os dados e passar o parametro "name" para essa API.
   */

  const response = await APIService.get(
    `/best-sellers/history.json?api-key=${process.env.API_KEY}&name=${name}`,
  );

  return response;
}
