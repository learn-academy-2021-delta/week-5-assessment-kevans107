# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def single_letter(array, value)
    # Create a method called single_letter
        array.select { |string| string.include?(value)}
    # Use the .select to iterate through the array
    # Inside the block use the .include? to return a boolean of whether the string includes a specific character
    end 

p single_letter beverages_array,letter_o
p single_letter beverages_array, letter_t



# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

def return_sum array
    # create a method called return_sum that has an array as a parameter
    array.inject { |sum, num| sum + num}
    # use the enumerator method .inject to take the zero index of the array and the first index and adds them together, continuing down the array until all numbers have passed through the block
    # returns the sum of all the numbers in the array 
end 

return_sum nums_array1
return_sum nums_array2

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
    attr_accessor :model, :wheels, :current_speed
    def initialize(model, wheels, current_speed)
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    def bike_info
        p "The Trek bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
end

my_bike = Bike.new("schwinn",2,10)
my_bike.bike_info

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(10) => 20
# Expected output example: my_bike.brake(25) => 0

class Bike
    # attr_accessor :model, :wheels, :current_speed, 
    def initialize(model, wheels, current_speed)
        @model = model
        @wheels = 2
        @current_speed = 0
        @pedal_faster = 10
        @brake = 0
    end
    def bike_info
        p "The Trek bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
    def pedal_faster(pedal_faster)
        p @current_speed = @current_speed + @pedal_faster
    end
    def pedal_brake(brake)
        if @current_speed >= 0
            p @current_speed = @current_speed - @brake
        end
    end
end

my_bike = Bike.new("schwinn",2,10)
my_bike.bike_info
my_bike.pedal_faster(10)
my_bike.pedal_faster(10)
my_bike.pedal_brake(15)
