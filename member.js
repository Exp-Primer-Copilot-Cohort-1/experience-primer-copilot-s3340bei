function skillsMember() {
    // Create the request
    var request = new XMLHttpRequest();
    // Create the path
    var path = "http://localhost:8080/api/member";
    // Open the request
    request.open("GET", path, true);
    // Send the request
    request.send();
    // When the request is done
    request.onreadystatechange = function() {
        // If the request is done and the request is OK
        if (this.readyState == 4 && this.status == 200) {
            // Get the response
            var response = this.responseText;
            // Parse the response
            var member = JSON.parse(response);
            // Get the skills
            var skills = member[0].skills;
            // Get the number of skills
            var numberOfSkills = skills.length;
            // For each skill
            for (var i = 0; i < numberOfSkills; i++) {
                // Get the skill
                var skill = skills[i];
                // Get the skill name
                var skillName = skill.name;
                // Get the skill level
                var skillLevel = skill.level;
                // Get the skill description
                var skillDescription = skill.description;
                // Create the option
                var option = document.createElement("option");
                // Set the option value
                option.value = skillName;
                // Set the option name
                option.innerHTML = skillName;
                // Add the option
                document.getElementById("skills").appendChild(option);
            }
        }
    }
}