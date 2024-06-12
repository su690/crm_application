<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $experience = $_POST['experience'];

    // Save data to a file on the server
    $data = "$name, $email, $phone, $experience\n";
    $file = fopen("applicants.txt", "a");
    fwrite($file, $data);
    fclose($file);

    echo "Data saved successfully!";
} else {
    echo "Error: Invalid request!";
}
?>
