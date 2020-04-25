/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    let roundedGrades = [];
    for (let i = 0; i < grades.length; i++) {
        let difference = multipleOfFive(grades[i]);
        let finalGrade = difference + grades[i];
        
        if ((difference < 3) && (finalGrade >= 40)) {
            roundedGrades.push(finalGrade);
        } else {
            roundedGrades.push(grades[i]);
        }
    }
    return roundedGrades;
}