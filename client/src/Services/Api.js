import axios from 'axios';

const API_URL = 'https://baconipsum.com/api/?type=all-meat&paras=50';
const fetchSearchResults = async (query) => {
    const response = await axios.get(API_URL);
    const paragraphs = response.data;
    // Filter the results to include only those paragraphs that match the query
    const filteredResults = paragraphs.filter((paragraph) =>
        paragraph.toLowerCase().includes(query.toLowerCase())
    ).map((paragraph, index) => ({
        id: index,
        text: paragraph,
    }));
    return filteredResults;
};

export default fetchSearchResults;
