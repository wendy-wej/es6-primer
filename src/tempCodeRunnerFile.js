{
    console.log("Code Segment: Use of 'Let'")
var grade_remark = "I am happy, I got an A";
    grade = 40;

    if (grade_remark < 70){
        let grade_remark = "Argh! I'm angry. I failed!";
        console.log(grade_remark)//prints "Argh! I'm angry. I failed!"
    }

    console.log(grade_remark); // prints "I am happy, I got an A"
}