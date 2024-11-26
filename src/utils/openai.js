import OpenAI from 'openai';
import { OEPNAI_KEY } from './constants';

const openai = new OpenAI({
  apiKey: OEPNAI_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true 
});


export default openai;