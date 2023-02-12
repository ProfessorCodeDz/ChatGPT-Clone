
export const generatePrompts = async (model, prompt) => {
  const DEFAULT_PARAMS = {
    "model": model,
    "temperature": 0.7,
    "max_tokens": 256,
    "top_p": 1,
    "frequency_penalty": 0,
    "presence_penalty": 0,
    "prompt": prompt
  }

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("openaiAPI")
    },
    body: JSON.stringify(DEFAULT_PARAMS)
  };
  const response = await fetch('https://api.openai.com/v1/completions', requestOptions);
  const data = await response.json();
  return data.choices[0].text;

}
