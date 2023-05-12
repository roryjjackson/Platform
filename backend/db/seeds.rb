# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.destroy_all

user1 = User.create(email: "test1@test.com", password: "123456")
user2 = User.create(email: "test1@test.com", password: "123456")
user3 = User.create(email: "test1@test.com", password: "123456")

Profile.destroy_all

profile1 = Profile.create(user_id: user1,
                          name: 'John McGinn',
                          job_satisfaction: 'I love it',
                          job_title: 'Plumber',
                          how: 'Apprenticeship',
                          why: 'Working with my hands',
                          what: 'My dad got me into it',
                          advice: 'Work hard')

profile2 = Profile.create(user_id: user2,
                          name: 'Michael Henning',
                          job_satisfaction: 'I love it',
                          job_title: 'Plumber',
                          how: 'Apprenticeship',
                          why: 'Working with my hands',
                          what: 'My dad got me into it',
                          advice: 'Work hard')

profile3 = Profile.create(user_id: user3,
                          name: 'Sean Bean',
                          job_satisfaction: 'I love it',
                          job_title: 'Plumber',
                          how: 'Apprenticeship',
                          why: 'Working with my hands',
                          what: 'My dad got me into it',
                          advice: 'Work hard')
