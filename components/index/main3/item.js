const item = () => {
  return (
    <li>
      <div>
        <div>
          <img src="https://i2.wp.com/konte.uix.store/home-v10/wp-content/uploads/sites/5/2018/09/1.jpg?resize=680%2C920&ssl=1" />
        </div>
        <div>
          <p>Ace Footstool Velour</p>
          <p>
            {(120000).toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </p>
        </div>
      </div>
    </li>
  );
};

export default item;
