# Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

# a -> 1
# e -> 2
# i -> 3
# o -> 4
# u -> 5
# For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

# Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

# For example, decode("h3 th2r2") would return "hi there".

# For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

encode_translate_dict = {
    'a': '1',
    'e': '2',
    'i': '3',
    'o': '4',
    'u': '5'
}

decode_translate_dict = {
    '1': 'a',
    '2': 'e',
    '3': 'i',
    '4': 'o',
    '5': 'u'
}


def crypto_worker(st, crypto_dict):
    for trans_word in crypto_dict:
        st = st.replace(trans_word, crypto_dict[trans_word])
    return st


def encode(st):
    return crypto_worker(st, encode_translate_dict)


def decode(st):
    return crypto_worker(st, decode_translate_dict)


print(encode('hello') == 'h2ll4')
print(encode('How are you today?') == 'H4w 1r2 y45 t4d1y?')
print(encode('This is an encoding test.') == 'Th3s 3s 1n 2nc4d3ng t2st.')
print(decode('h2ll4') == 'hello')

# Best Solution
# def encode(s, t=str.maketrans("aeiou", "12345")):
#     return s.translate(t)

# def decode(s, t=str.maketrans("12345", "aeiou")):
#     return s.translate(t)
