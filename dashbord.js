document.addEventListener('DOMContentLoaded', function () {
  const idebElement = document.querySelector('#ideb .info-value');
  const aprendizadoElement = document.querySelector('#aprendizado .info-value');
  const fluxoElement = document.querySelector('#fluxo .info-value');

  const baseURL = 'https://api.qedu.org.br/v1/ideb';
  const token = 'uCepcSkwipY8IqOGft3XWe8RWvUTyjr94abLkYN6';

  const params = {
    id: 2111300,
    ano: 2019,
    dependencia_id: 2,
    ciclo_id: 'AI'
  };

  axios.get(baseURL, {
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    params
  })
  .then((response) => {
    console.log('Resposta da API:', response.data);

    const dataItem = response.data?.data?.[0] || response.data?.data || response.data;

    if (!dataItem) {
      throw new Error('Nenhum dado encontrado na resposta da API');
    }

    idebElement.textContent = parseFloat(dataItem.ideb).toFixed(2);
    aprendizadoElement.textContent = parseFloat(dataItem.aprendizado).toFixed(4);
    fluxoElement.textContent = parseFloat(dataItem.fluxo).toFixed(4);
  })
  .catch((error) => {
    console.error('Erro na requisição:', error);
    idebElement.textContent = 'Erro';
    aprendizadoElement.textContent = 'Erro';
    fluxoElement.textContent = 'Erro';
  });
});
