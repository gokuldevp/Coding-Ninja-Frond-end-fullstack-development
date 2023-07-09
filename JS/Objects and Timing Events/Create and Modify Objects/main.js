var main = function () {
  // Use it to set the student and address objects
  let student, address;

  function setStudent() {
    // Step 1: Create the student object with three properties: name, age, and roll no.
    student = {
        name: "name",
        age: 18,
        "roll no": 1
    };
  }

  function setAddressAndUpdateStudent() {
    // Step 2: Create the address object with city and state properties
    address = {
      City: "city",
      state: "state"
    };

    // Add the address object as a property to the student object
    student.address = address;
  }

  function deleteRollNumber() {
    // Step 3: Remove the 'rollNo' property from the student object
    delete student['roll no'];
  }

  function getStudent() {
    return student;
  }

  function getAddress() {
    return address;
  }

  return {
    setStudent,
    setAddressAndUpdateStudent,
    deleteRollNumber,
    getStudent,
    getAddress
  };
};