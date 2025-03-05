const axios = require('axios');

const linkShorten = async (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'Por favor, forneça uma URL válida.' });
    }

    try {
        const response = await axios.post('https://cleanuri.com/api/v1/shorten', { url: url });

        console.log("Resposta da API:", response.data);
        return res.json({ shortenedUrl: response.data.result_url });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Ocorreu um erro ao encurtar a URL.' });
    }
};

module.exports = linkShorten;