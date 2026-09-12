// ========================================
// MEDI-PASS JAVASCRIPT
// ========================================

console.log("MEDI-PASS loaded successfully!");


// ========================================
// LOGIN
// ========================================

function loginUser() {

    alert(
        "🔐 MEDI-PASS Login\n\n" +
        "Login feature will be available in the next version."
    );

}


// ========================================
// EMERGENCY CARD
// ========================================

function emergencyCard() {

    alert(
        "🚨 EMERGENCY MEDICAL CARD\n\n" +
        "Patient: Demo Patient\n" +
        "Age: 21 Years\n" +
        "Blood Group: O+\n" +
        "Blood Pressure: 70/40\n" +
        "SpO₂: 98%\n\n" +
        "⚠️ Critical Allergy: Drug Allergy\n\n" +
        "Emergency information only."
    );

}


// ========================================
// REGISTRATION
// ========================================

function registerPatient(event) {

    event.preventDefault();

    const patientData = {
        name: document.getElementById("name").value,
        dob: document.getElementById("dob").value,
        gender: document.getElementById("gender").value,
        mobile: document.getElementById("mobile").value,
        email: document.getElementById("email").value,
        blood: document.getElementById("blood").value,
        height: document.getElementById("height").value,
        weight: document.getElementById("weight").value,
        emergencyName: document.getElementById("emergencyName").value,
        emergencyPhone: document.getElementById("emergencyPhone").value,
        conditions: document.getElementById("conditions").value,
        allergies: document.getElementById("allergies").value,
        abha: document.getElementById("abha").value,
        language: document.getElementById("language").value
    };

    // Save patient information in browser
    localStorage.setItem(
        "mediPassPatient",
        JSON.stringify(patientData)
    );

    alert(
        "✅ MEDI-PASS PROFILE CREATED!\n\n" +
        "Patient: " + patientData.name + "\n" +
        "Blood Group: " + patientData.blood + "\n\n" +
        "Your medical profile is ready. 🏥"
    );

    // Go to dashboard
    window.location.href = "dashboard.html";
}
// ========================================
// HEALTH VITALS
// ========================================



