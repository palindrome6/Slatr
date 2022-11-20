from flask import Flask
from transformers import M2M100ForConditionalGeneration, M2M100Tokenizer
from flask import request;
from flask_cors import CORS, cross_origin


app = Flask(__name__)
model = M2M100ForConditionalGeneration.from_pretrained("facebook/m2m100_418M")
tokenizer = M2M100Tokenizer.from_pretrained("facebook/m2m100_418M")


@app.route('/translate', methods=['GET'])
@cross_origin() 
def translate():
    from_lang = request.args.get('fromlang')
    to_lang = request.args.get('tolang')
    text = request.args.get('text')

    tokenizer.src_lang = from_lang
    encoded_hi = tokenizer(text, return_tensors="pt")
    generated_tokens = model.generate(**encoded_hi, forced_bos_token_id=tokenizer.get_lang_id(to_lang),
                                      max_new_tokens=200)
    translated_text = tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)[0]
    return translated_text



