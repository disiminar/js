function triangle(val1 = 3, type1 = "leg", val2 = 4, type2 = "leg") {
    const validTypes = [
      "leg",
      "hypotenuse",
      "adjacent angle",
      "opposite angle",
      "angle",
    ];

    const isValidType = (type) => validTypes.includes(type);
    const isValidValue = (val) => val > 0 && typeof val === "number";

    let a, b, c, alpha, beta;

    if (!isValidType(type1) || !isValidType(type2)) {
        console.log(
          "Invalid types"
        );
        return "failed";
    }

    if (!isValidValue(val1) || !isValidValue(val2)) {
        return "Invalid values";
    }    

    if (type1 === "hypotenuse" && type2 === "hypotenuse") {
        console.log(
          "Invalid input - 2 hypotenuses"
        );
        return "failed";
    }

    switch (type1) {
        case "leg":
          //
          switch (type2) {
            case "hypotenuse":
                //
                break;
            case "leg":
                // 
                break;
            case "adjacent angle":
                //
                break;
            case "opposite angle":
                //
                break;
            default:
                console.log("Minor spelling mistake o_0");
                return "failed";        
          }
        //
        break;
         
        }

    console.log(
        'triangle (7, "leg", 8, "hypotenuse")', "\n",
        "a:", a, "\n",
        "b:", b, "\n",
        "c:", c, "\n",
        "alpha:", alpha, "\n",
        "beta:", beta );
      return "success";
}

triangle (7, "leg", 8, "hypotenuse")