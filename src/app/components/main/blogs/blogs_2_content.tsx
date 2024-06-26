import React from "react";

const Blogs_2_content = () => {
  return (
    <div className="blogs_content_container">
      <div className="content content_left">
        <strong>1.Совместимость с автомобилем.</strong>
        <div>
          <p>
            Проблемы совместимости могут возникнуть, если зарядная станция не
            имеет соответствующих разъемов или уровней мощности, необходимых для
            конкретных электромобилей.
          </p>
        </div>
        <div>
          <strong> 2.Доступность зарядной инфраструктуры</strong>
          <p>
            Инвестиции в зарядные станции для электромобилей  в районах с
            высоким спросом и ограниченной зарядной инфраструктурой открывают
            выгодные возможности.
          </p>
        </div>

        <strong> 3. Потребности ваших клиентов в зарядке</strong>
        <p>
          Зарядное устройство для электромобилей уровня 1, часто использующее
          стандартную бытовую розетку, является самым медленным, но широко
          доступным. Автомобильное зарядное устройство уровня 2 обеспечивает
          более высокую скорость и подходит для ночлега или длительного
          пребывания. Быстрое зарядное устройство постоянного
        </p>
      </div>
      <div className="content content_right">
        <p>
          тока уровня 3 обеспечивает максимальную скорость зарядки и идеально
          подходит для быстрой подзарядки во время поездок или в ограниченное
          время.
        </p>
        <strong> 4. Соображения стоимости</strong>
        <p>
          Оцените финансовые последствия, связанные с различными уровнями
          взимания платы.
        </p>
        <strong> 5.Совместимость типов вилок</strong>
        <p>
          Для разных уровней зарядки электромобилей могут использоваться разные
          типы разъемов, например SAE J1772 для зарядных устройств уровня 1 и 2,
          а также CCS или CHAdeMO для быстрых зарядных устройств постоянного
          тока уровня 3.{" "}
        </p>
        <button className="btn_blogs">Написать нам</button>
      </div>
    </div>
  );
};

export default Blogs_2_content;
