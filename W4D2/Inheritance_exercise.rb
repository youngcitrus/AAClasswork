class Employee

  attr_accessor :boss, :salary
  
  def initialize(name, title, salary)
    @name = name
    @title = title
    @salary = salary
    @boss = nil
  end
  
  def bonus(multiplier)
    @bonus = @salary * multiplier
  end
end

class Manager < Employee
  
  attr_reader :subordinates

  def initialize(name, title, salary)
    super
    @subordinates = []
    
  end

  def add_subordinate(employee)
    @subordinates << employee
    employee.boss = self
  end

  def bonus(multiplier)
    q = []
    sub_salary = 0

    self.subordinates.each do |person|
      q << person
    end

    until q.empty?
      person = q.shift
      sub_salary += person.salary

      if person.is_a?(Manager)
        person.subordinates.each do |sub|
          q << sub
        end
      end
      
    end

    @bonus = sub_salary * multiplier

  end

end

ned = Manager.new("Ned", "founder", 10000000)
darren = Manager.new("Darren", "TA Manager", 78000)
shawna = Employee.new("Shawna", "TA", 12000)
david = Employee.new("David", "TA", 10000)



darren.add_subordinate(shawna)
darren.add_subordinate(david)
ned.add_subordinate(darren)

p darren.bonus(4)
p ned.bonus(5)