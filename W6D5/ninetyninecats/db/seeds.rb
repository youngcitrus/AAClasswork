# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

cat1 = Cat.create!(name: "Casper", birth_date: '2015/01/20', color: "White", sex: "M", description: "Casper is a friendly cat.")
cat2 = Cat.create!(name: "Meowth", birth_date: '1997/06/21', color: "Calico", sex: 'F', description: 'Meowth, I choose you!')
