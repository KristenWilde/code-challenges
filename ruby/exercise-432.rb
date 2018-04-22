# From Ruby on Rails Tutorial 4th edition by M. Hartl, p. 170
#1. Using the range 0..16, print out the first 17 powers of 2.

(0..16).each do |num|
  puts 2**(num + 1)
end

#2. define method 'yeller'

def yeller(array)
  array.join.upcase
end

puts yeller(['o','l','d']) # OLD

#3. return a randomly generated string of 8 letters.

def random_subdomain
  ('a'..'z').to_a.shuffle[0..7].join
end

puts random_subdomain