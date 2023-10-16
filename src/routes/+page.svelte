<script>
    export let form;
</script>

<h1>GDSC JNU</h1>
<h2>Cloud Study Jam</h2>
<form method="POST">
    <label for="email">
        Email
    </label>
    <input name="email" type="email" placeholder="mail@mailer.xyz" required>
    <br>
    <label for="sizes">
        TShirt Size
    </label>
    <select name="size" required>
        <option value="xs">XS</option>
        <option value="s">S</option>
        <option value="m">M</option>
        <option value="l">L</option>
        <option value="xl">XL</option>
        <option value="xxl">XXL</option>
    </select>
    <button>Submit</button>
</form>

<p>Status:{form}</p>