
  document.addEventListener('DOMContentLoaded', function () {
    const idebElement = document.getElementById('ideb');
    const aprendizadoElement = document.getElementById('aprendizado');
    const fluxoElement = document.getElementById('fluxo');

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
      const dataItem = response.data?.data?.[0];

      if (!dataItem) {
        throw new Error('Nenhum dado encontrado na resposta da API');
      }

      idebElement.textContent = `IDEB: ${parseFloat(dataItem.ideb).toFixed(2)}`;
      aprendizadoElement.textContent = `Aprendizado: ${parseFloat(dataItem.aprendizado).toFixed(2)}`;
      fluxoElement.textContent = `Fluxo: ${parseFloat(dataItem.fluxo).toFixed(2)}`;
    })
    .catch((error) => {
      console.error('Erro na requisição:', error);
      idebElement.textContent = 'Erro ao carregar IDEB';
      aprendizadoElement.textContent = 'Erro ao carregar Aprendizado';
      fluxoElement.textContent = 'Erro ao carregar Fluxo';
    });
  });

