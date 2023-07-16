import { APIService } from '../api-service';

export async function getBestSellers() {
  const BEST_SELLERS = 'best_sellers';
  let data;

  if (!localStorage.getItem(BEST_SELLERS)) {
    const response = await APIService.get(
      `/best-sellers/history.json?api-key=${process.env.API_KEY}`,
    );

    localStorage.setItem(BEST_SELLERS, JSON.stringify(response));
    data = response;
  } else {
    data = JSON.parse(localStorage.getItem(BEST_SELLERS));
  }

  return data;
}
