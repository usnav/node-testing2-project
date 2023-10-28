exports.seed = function(knex) {
    return knex('jokes').truncate()
        .then(function () {
            return knex('jokes').insert([
                { joke: "Whats nine plus ten?" , punchline: "21!" },
                { joke: "How do you make a tissue dance?" , punchline: "Put a little boogie in it!" },
                { joke: "What is an astronaut's favorite part on a computer?" , punchline: "The spacebar!" },
                { joke: "What do you get from a pampered cow?" , punchline: "Spoiled milk!" },
                { joke: "Why is it annoying to eat next to basketball players?" , punchline: "They dribble all the time" },
                { joke: "The numbers 19 and 20 got into a fight..." , punchline: "21!" }
            ])
        })
}