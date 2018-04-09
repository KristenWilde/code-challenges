# 1 consonant
# 2 vowel
# 2 uppercase consonant
# 4 uppercase vowel

def word_profit(word)
  production_price = 0
  
  word.chars.each do |letter|
    price = letter.match(/[aeiou]/) ? 2 : 1
    price *= 2 if letter.match(/[A-Z]/)
    production_price += price
  end

  selling_price = if word.match(/[qz]/i)
                    production_price * 1.75
                  else 
                    production_price * 1.5
                  end

  selling_price - production_price
end

puts word_profit('Launch') # 2+2+2+1+1+1 == 9   9*1.5 == 13.5     13.5-9 == 4.5
puts word_profit('Zchool') # 2+1+1+2+2+1 == 9   9*1.75 == 15.75   15.75-9 == 
puts word_profit('ZCHOOL')