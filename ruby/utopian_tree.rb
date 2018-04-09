#from https://www.hackerrank.com/challenges/utopian-tree/problem
#The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.
# Laura plants a Utopian Tree sapling with a height of 1 meter at the onset of spring. How tall will her tree be after  growth cycles?

def utopianTree(n)
  cycle = 0
  height = 1
  loop do
    break height if cycle >= n
    cycle += 1
    if cycle.odd? 
        height *= 2
    else
        height += 1
    end
  end
end

p utopianTree(0) # 1
p utopianTree(1) # 2
p utopianTree(2) # 3
p utopianTree(3) # 6
p utopianTree(4) # 7
p utopianTree(5) # 14