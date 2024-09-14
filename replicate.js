require("dotenv").config();
const axios = require('axios');

const { REPLICATE_API_TOKEN } = process.env;

const llama_3_70b = async () => {
    const data = {
        input: {
          top_k: 0,
          top_p: 0.9,
          prompt: "Work through this problem step by step:\n\nQ: Sarah has 7 llamas. Her friend gives her 3 more trucks of llamas. Each truck has 5 llamas. How many llamas does Sarah have in total?",
          max_tokens: 512,
          min_tokens: 0,
          temperature: 0.6,
          system_prompt: "You are a helpful assistant",
          length_penalty: 1,
          stop_sequences: "<|end_of_text|>,<|eot_id|>",
          prompt_template: "<|begin_of_text|><|start_header_id|>system<|end_header_id|>\n\nYou are a helpful assistant<|eot_id|><|start_header_id|>user<|end_header_id|>\n\n{prompt}<|eot_id|><|start_header_id|>assistant<|end_header_id|>\n\n",
          presence_penalty: 1.15,
          log_performance_metrics: false
        }
      };

      const config = {
        method: 'post',
        url: 'https://api.replicate.com/v1/models/meta/meta-llama-3-70b-instruct/predictions',
        headers: {
          'Authorization': `Bearer ${REPLICATE_API_TOKEN}`,
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
      };

      console.log(config);
      return;

      try {
        const response = await axios(config);
        console.log(response.data);
      } catch(err) {
        console.error(err)
      }
}

llama_3_70b();