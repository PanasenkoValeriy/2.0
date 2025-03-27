export const InputForm = () => {
    return (
        <div>
            <form>
                <label>
                    <span>Name</span>
                    <input type="text" />
                </label>
                <label>
                    <span>Price</span>
                    <input type="number" />
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}