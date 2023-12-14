import VtMCharacter from "./components/VtMCharacter";
import ClickableLine from "./components/ClickableLine";
import ClickableSquares from "./components/ClickableSquares";
import React, { useState } from "react";

import "./vtmstyles.css";

interface IVtMCharacterStatsProps {
  character?: VtMCharacter;
  defaultCharacter?: VtMCharacter;
  onCharacterChanged?: (
    character: VtMCharacter,
    changedField: string,
    newValue: any
  ) => void;
}

interface IVtMCharacterStatsState {
  character: VtMCharacter;
}

const initialState: IVtMCharacterStatsState = {
  character: {},
};

function VtMCharacterStats() {
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [inputField1Text, setInputField1Text] = useState<string>("");
  const [inputField2Text, setInputField2Text] = useState<string>("");
  const [inputField3Text, setInputField3Text] = useState<string>("");

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    setSelectedItem(selectedValue);
    if (selectedValue === "Option1") {
      setInputField1Text("Celerity");
      setInputField2Text("Obfuscate");
      setInputField3Text("Quietus");
    } else if (selectedValue === "Option2") {
      setInputField1Text("Animalism");
      setInputField2Text("Fortitude");
      setInputField3Text("Protean");
    } else if (selectedValue === "Option3") {
      setInputField1Text("Auspex");
      setInputField2Text("Dementation");
      setInputField3Text("Obfuscate");
    } else if (selectedValue === "Option4") {
      setInputField1Text("Animalism");
      setInputField2Text("Obfuscate");
      setInputField3Text("Potence");
    } else if (selectedValue === "Option5") {
      setInputField1Text("Auspex");
      setInputField2Text("Celerity");
      setInputField3Text("Presence");
    } else if (selectedValue === "Option6") {
      setInputField1Text("Auspex");
      setInputField2Text("Dominate");
      setInputField3Text("Thaumaturgy");
    } else if (selectedValue === "Option7") {
      setInputField1Text("Dominate");
      setInputField2Text("Fortitude");
      setInputField3Text("Presence");
    }
  };

  const handleInputField1Change = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log("im happening");
    const newText = event.target.value;
    setInputField1Text(newText);
  };

  const handleInputField2Change = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newText = event.target.value;
    setInputField2Text(newText);
  };

  const handleInputField3Change = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newText = event.target.value;
    setInputField3Text(newText);
  };

  const optionImageMap: { [key: string]: string } = {
    Option1: "images/brujah.png",
    Option2: "images/gangrel.png",
    Option3: "images/malkavian.png",
    Option4: "images/nosferatu.png",
    Option5: "images/toreador.png",
    Option6: "images/tremere.png",
    Option7: "images/ventrue.png"
  };
  return (
    <div className="container-xl mt-5 mb-5">
      <div>
        <div className="row mb-4 justify-content-center">
          <div className="vtm-page-title">VtM</div>
          <div className="col-md-19 pr-2 pl-2">
            <div className="pr-3 pl-3">
              <div className="row pl-3 pr-3 ">
                <div className="row pl-3 pr-3 justify-content-center">
                  <div className="col-md-3 col-6 mb-3">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <label>Имя</label>
                      <input className="vtm-input" type="text" />
                    </div>
                  </div>
                  <div className="col-md-3 col-6 mb-3">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <label>Игрок</label>
                      <input className="vtm-input" type="text" />
                    </div>
                  </div>
                  <div className="col-md-3 col-6 mb-3">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <label>Хроника</label>
                      <input className="vtm-input" type="text" />
                    </div>
                  </div>
                </div>
                <div className="row pl-3 pr-3 justify-content-center">
                  <div className="col-md-3 col-6 mb-3">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <label>Натура</label>
                      <input className="vtm-input" type="text" />
                    </div>
                  </div>
                  <div className="col-md-3 col-6 mb-3">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <label>Маска</label>
                      <input className="vtm-input" type="text" />
                    </div>
                  </div>
                  <div className="col-md-3 col-6 mb-3">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <label>Клан</label>
                      <div>
                        <select
                          value={selectedItem}
                          onChange={handleDropdownChange}
                        >
                          <option value="Option0">--</option>
                          <option value="Option1">Brujah</option>
                          <option value="Option2">Gangrel</option>
                          <option value="Option3">Malkavian</option>
                          <option value="Option4">Nosferatu</option>
                          <option value="Option5">Toreador</option>
                          <option value="Option6">Tremere</option>
                          <option value="Option7">Ventrue</option>
                        </select>
                      </div>
                      <div>
                        {selectedItem && (
                          <img
                            src={optionImageMap[selectedItem]}
                            alt={`Image for ${selectedItem}`}
                            style={{ maxWidth: "100%" }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row pl-3 pr-3 justify-content-center">
                  <div className="col-md-3 col-6 pl-0 pr-0">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <label>Поколение</label>
                      <input className="vtm-input" type="text" />
                    </div>
                  </div>
                  <div className="col-md-3 col-6 pl-0 pr-0">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <label>Убежище</label>
                      <input className="vtm-input" type="text" />
                    </div>
                  </div>
                  <div className="col-md-3 col-6 pl-0 pr-0">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <label>Концепт</label>
                      <input className="vtm-input" type="text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4 justify-content-center">
        <div className="center-container">
          <div className="arrow-label-container">
            <div className="arrow left-arrow">
              <div className="arrow-line"></div>
            </div>
            <span className="label">Атрибуты</span>
            <div className="arrow right-arrow">
              <div className="arrow-line"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4 justify-content-center">
        <div className="col-md-19 pr-2 pl-2">
          <div className="pr-3 pl-3">
            <div className="row pl-3 pr-3 ">
              <div className="row pl-3 pr-3 justify-content-center">
                <div className="col-md-3 col-6 mb-3 d-flex align-items-center justify-content-center">
                  <label>Таланты</label>
                </div>
                <div className="col-md-3 col-6 mb-3 d-flex align-items-center justify-content-center">
                  <label>Навыки</label>
                </div>
                <div className="col-md-3 col-6 mb-3 d-flex align-items-center justify-content-center">
                  <label>Познания</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pr-3 pl-3">
          <div className="row pl-3 pr-3 justify-content-center">
            <div className="col-md-4 mb-3">
              <div style={{ display: "flex", alignItems: "center" }}>
                <label style={{ flex: "none" }}>Сила</label>
                <input
                  className="vtm-attribute-input"
                  type="text"
                  style={{ width: "100%" }}
                />
                <div style={{ flex: "none" }}>
                  <ClickableLine numberOfCircles={8} />
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div style={{ display: "flex", alignItems: "center" }}>
                <label style={{ flex: "none" }}>Обаяние</label>
                <input
                  className="vtm-attribute-input"
                  type="text"
                  style={{ width: "100%" }}
                />
                <div style={{ flex: "none" }}>
                  <ClickableLine numberOfCircles={8} />
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div style={{ display: "flex", alignItems: "center" }}>
                <label style={{ flex: "none" }}>Восприятие</label>
                <input
                  className="vtm-attribute-input"
                  type="text"
                  style={{ width: "100%" }}
                />
                <div style={{ flex: "none" }}>
                  <ClickableLine numberOfCircles={8} />
                </div>
              </div>
            </div>
          </div>
          <div className="row pl-3 pr-3 justify-content-center">
            <div className="col-md-4 mb-3">
              <div style={{ display: "flex", alignItems: "center" }}>
                <label style={{ flex: "none" }}>Ловкость</label>
                <input
                  className="vtm-attribute-input"
                  type="text"
                  style={{ width: "100%" }}
                />
                <div style={{ flex: "none" }}>
                  <ClickableLine numberOfCircles={8} />
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div style={{ display: "flex", alignItems: "center" }}>
                <label style={{ flex: "none" }}>Манипуляция</label>
                <input
                  className="vtm-attribute-input"
                  type="text"
                  style={{ width: "100%" }}
                />
                <div style={{ flex: "none" }}>
                  <ClickableLine numberOfCircles={8} />
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div style={{ display: "flex", alignItems: "center" }}>
                <label>Интеллект</label>
                <input
                  className="vtm-attribute-input"
                  type="text"
                  style={{ width: "100%" }}
                />
                <div style={{ flex: "none" }}>
                  <ClickableLine numberOfCircles={8} />
                </div>
              </div>
            </div>
          </div>
          <div className="row pl-3 pr-3 justify-content-center">
            <div className="col-md-4 mb-3">
              <div style={{ display: "flex", alignItems: "center" }}>
                <label style={{ flex: "none" }}>Выносливость</label>
                <input className="vtm-attribute-input" type="text" />
                <div style={{ flex: "none" }}>
                  <div style={{ flex: "none" }}>
                    <ClickableLine numberOfCircles={8} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div style={{ display: "flex", alignItems: "center" }}>
                <label style={{ flex: "none" }}>Внешность</label>
                <input className="vtm-attribute-input" type="text" />
                <div style={{ flex: "none" }}>
                  <ClickableLine numberOfCircles={8} />
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div style={{ display: "flex", alignItems: "center" }}>
                <label style={{ flex: "none" }}>Смекалка</label>
                <input className="vtm-attribute-input" type="text" />
                <div style={{ flex: "none" }}>
                  <ClickableLine numberOfCircles={8} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4 justify-content-center">
        <div className="center-container">
          <div className="arrow-label-container">
            <div className="arrow left-arrow">
              <div className="arrow-line"></div>
            </div>
            <span className="label">Способности</span>
            <div className="arrow right-arrow">
              <div className="arrow-line"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4 justify-content-center">
        <div className="col-md-19 pr-2 pl-2">
          <div className="pr-3 pl-3">
            <div className="row pl-3 pr-3 ">
              <div className="row pl-3 pr-3 justify-content-center">
                <div className="col-md-3 col-6 mb-3 d-flex align-items-center justify-content-center">
                  <label>Таланты</label>
                </div>
                <div className="col-md-3 col-6 mb-3 d-flex align-items-center justify-content-center">
                  <label>Навыки</label>
                </div>
                <div className="col-md-3 col-6 mb-3 d-flex align-items-center justify-content-center">
                  <label>Познания</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pr-3 pl-3">
          <div className="row pl-3 pr-3 ">
            <div className="row pl-3 pr-3 justify-content-center">
              <div className="col-md-4 mb-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label style={{ flex: "none" }}>Атлетика</label>
                  <input className="vtm-attribute-input" type="text" />
                  <div style={{ flex: "none" }}>
                    <ClickableLine numberOfCircles={8} />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label style={{ flex: "none" }}>Безопасность</label>
                  <input className="vtm-attribute-input" type="text" />
                  <div style={{ flex: "none" }}>
                    <ClickableLine numberOfCircles={8} />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label style={{ flex: "none" }}>Академические</label>
                  <input className="vtm-attribute-input" type="text" />
                  <div style={{ flex: "none" }}>
                    <ClickableLine numberOfCircles={8} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row pl-3 pr-3 justify-content-center">
              <div className="col-md-4 mb-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label style={{ flex: "none" }}>Внимательность</label>
                  <input className="vtm-attribute-input" type="text" />
                  <div style={{ flex: "none" }}>
                    <ClickableLine numberOfCircles={8} />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label style={{ flex: "none" }}>Вождение</label>
                  <input className="vtm-attribute-input" type="text" />
                  <div style={{ flex: "none" }}>
                    <ClickableLine numberOfCircles={8} />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label style={{ flex: "none" }}>Законы</label>
                  <input className="vtm-attribute-input" type="text" />
                  <div style={{ flex: "none" }}>
                    <ClickableLine numberOfCircles={8} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row pl-3 pr-3 justify-content-center">
              <div className="col-md-4 mb-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label style={{ flex: "none" }}>Запугивание</label>
                  <input className="vtm-attribute-input" type="text" />
                  <div style={{ flex: "none" }}>
                    <ClickableLine numberOfCircles={8} />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label style={{ flex: "none" }}>Выживание</label>
                  <input className="vtm-attribute-input" type="text" />
                  <div style={{ flex: "none" }}>
                    <ClickableLine numberOfCircles={8} />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label style={{ flex: "none" }}>Компьютеры</label>
                  <input className="vtm-attribute-input" type="text" />
                  <div style={{ flex: "none" }}>
                    <ClickableLine numberOfCircles={8} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row pl-3 pr-3 justify-content-center">
              <div className="col-md-4 mb-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label style={{ flex: "none" }}>Знание улиц</label>
                  <input className="vtm-attribute-input" type="text" />
                  <div style={{ flex: "none" }}>
                    <ClickableLine numberOfCircles={8} />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label style={{ flex: "none" }}>Исполнение</label>
                  <input className="vtm-attribute-input" type="text" />
                  <div style={{ flex: "none" }}>
                    <ClickableLine numberOfCircles={8} />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label style={{ flex: "none" }}>Лингвистика</label>
                  <input className="vtm-attribute-input" type="text" />
                  <div style={{ flex: "none" }}>
                    <ClickableLine numberOfCircles={8} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row pl-3 pr-3 justify-content-center">
              <div className="col-md-4 mb-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label style={{ flex: "none" }}>Лидерство</label>
                  <input className="vtm-attribute-input" type="text" />
                  <div style={{ flex: "none" }}>
                    <ClickableLine numberOfCircles={8} />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label style={{ flex: "none" }}>Знание животных</label>
                  <input className="vtm-attribute-input" type="text" />
                  <div style={{ flex: "none" }}>
                    <ClickableLine numberOfCircles={8} />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label style={{ flex: "none" }}>Медицина</label>
                  <input className="vtm-attribute-input" type="text" />
                  <div style={{ flex: "none" }}>
                    <ClickableLine numberOfCircles={8} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row pl-3 pr-3 justify-content-center">
              <div className="col-md-4 mb-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label style={{ flex: "none" }}>Рукопашный бой</label>
                  <input className="vtm-attribute-input" type="text" />
                  <div style={{ flex: "none" }}>
                    <ClickableLine numberOfCircles={8} />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label style={{ flex: "none" }}>Ремесла</label>
                  <input className="vtm-attribute-input" type="text" />
                  <div style={{ flex: "none" }}>
                    <ClickableLine numberOfCircles={8} />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label style={{ flex: "none" }}>Научные</label>
                  <input className="vtm-attribute-input" type="text" />
                  <div style={{ flex: "none" }}>
                    <ClickableLine numberOfCircles={8} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row pl-3 pr-3 justify-content-center">
              <div className="col-md-4 mb-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label style={{ flex: "none" }}>Уклонение</label>
                  <input className="vtm-attribute-input" type="text" />
                  <div style={{ flex: "none" }}>
                    <ClickableLine numberOfCircles={8} />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label style={{ flex: "none" }}>Скрытность</label>
                  <input className="vtm-attribute-input" type="text" />
                  <div style={{ flex: "none" }}>
                    <ClickableLine numberOfCircles={8} />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label style={{ flex: "none" }}>Оккультизм</label>
                  <input className="vtm-attribute-input" type="text" />
                  <div style={{ flex: "none" }}>
                    <ClickableLine numberOfCircles={8} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row pl-3 pr-3 justify-content-center">
              <div className="col-md-4 mb-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label style={{ flex: "none" }}>Хитрость</label>
                  <input className="vtm-attribute-input" type="text" />
                  <div style={{ flex: "none" }}>
                    <ClickableLine numberOfCircles={8} />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label style={{ flex: "none" }}>Стрельба</label>
                  <input className="vtm-attribute-input" type="text" />
                  <div style={{ flex: "none" }}>
                    <ClickableLine numberOfCircles={8} />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label style={{ flex: "none" }}>Политика</label>
                  <input className="vtm-attribute-input" type="text" />
                  <div style={{ flex: "none" }}>
                    <ClickableLine numberOfCircles={8} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row pl-3 pr-3 justify-content-center">
              <div className="col-md-4 mb-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label style={{ flex: "none" }}>Экспрессия</label>
                  <input className="vtm-attribute-input" type="text" />
                  <div style={{ flex: "none" }}>
                    <ClickableLine numberOfCircles={8} />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label style={{ flex: "none" }}>Фехтование</label>
                  <input className="vtm-attribute-input" type="text" />
                  <div style={{ flex: "none" }}>
                    <ClickableLine numberOfCircles={8} />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label style={{ flex: "none" }}>Расследования</label>
                  <input className="vtm-attribute-input" type="text" />
                  <div style={{ flex: "none" }}>
                    <ClickableLine numberOfCircles={8} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row pl-3 pr-3 justify-content-center">
              <div className="col-md-4 mb-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label style={{ flex: "none" }}>Эмпатия</label>
                  <input className="vtm-attribute-input" type="text" />
                  <div style={{ flex: "none" }}>
                    <ClickableLine numberOfCircles={8} />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label style={{ flex: "none" }}>Этикет</label>
                  <input className="vtm-attribute-input" type="text" />
                  <div style={{ flex: "none" }}>
                    <ClickableLine numberOfCircles={8} />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label style={{ flex: "none" }}>Финансы</label>
                  <input className="vtm-attribute-input" type="text" />
                  <div style={{ flex: "none" }}>
                    <ClickableLine numberOfCircles={8} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4 justify-content-center">
        <div className="center-container">
          <div className="arrow-label-container">
            <div className="arrow left-arrow">
              <div className="arrow-line"></div>
            </div>
            <span className="label">Преимущества</span>
            <div className="arrow right-arrow">
              <div className="arrow-line"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4 justify-content-center">
        <div className="pr-3 pl-3">
          <div className="row pl-3 pr-3 ">
            <div className="row pl-3 pr-3 justify-content-center">
              <div className="col-md-3 col-6 mb-3 d-flex align-items-center justify-content-center">
                <label>Дополнения</label>
              </div>
              <div className="col-md-3 col-6 mb-3 d-flex align-items-center justify-content-center">
                <label>Дисциплины</label>
              </div>
              <div className="col-md-3 col-6 mb-3 d-flex align-items-center justify-content-center">
                <label>Добродетели </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4 justify-content-center">
        <div className="col justify-content-center">
          <div className="col-md-10 col-6 mb-3">
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                className="vtm-attribute-input"
                type="text"
                style={{ width: "46%" }}
              />
              <ClickableLine numberOfCircles={8} />
            </div>
          </div>
          <div className="col-md-10 col-6 mb-3">
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                className="vtm-attribute-input"
                type="text"
                style={{ width: "46%" }}
              />
              <ClickableLine numberOfCircles={8} />
            </div>
          </div>
          <div className="col-md-10 col-6 mb-3">
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                className="vtm-attribute-input"
                type="text"
                style={{ width: "46%" }}
              />
              <ClickableLine numberOfCircles={8} />
            </div>
          </div>
          <div className="col-md-10 col-6 mb-3">
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                className="vtm-attribute-input"
                type="text"
                style={{ width: "46%" }}
              />
              <ClickableLine numberOfCircles={8} />
            </div>
          </div>
          <div className="col-md-10 col-6 mb-3">
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                className="vtm-attribute-input"
                type="text"
                style={{ width: "46%" }}
              />
              <ClickableLine numberOfCircles={8} />
            </div>
          </div>
          <div className="col-md-10 col-6 mb-3">
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                className="vtm-attribute-input"
                type="text"
                style={{ width: "46%" }}
              />
              <ClickableLine numberOfCircles={8} />
            </div>
          </div>
          <div className="col-md-10 col-6 mb-3">
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                className="vtm-attribute-input"
                type="text"
                style={{ width: "46%" }}
              />
              <ClickableLine numberOfCircles={8} />
            </div>
          </div>
          <div className="col-md-10 col-6 mb-3">
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                className="vtm-attribute-input"
                type="text"
                style={{ width: "46%" }}
              />
              <ClickableLine numberOfCircles={8} />
            </div>
          </div>
          <div className="col-md-10 col-6 mb-3">
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                className="vtm-attribute-input"
                type="text"
                style={{ width: "46%" }}
              />
              <ClickableLine numberOfCircles={8} />
            </div>
          </div>
        </div>
        <div className="col justify-content-center">
          <div className="col-md-10 col-6 mb-3">
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                className="vtm-attribute-input"
                type="text"
                style={{ width: "46%" }}
                value={inputField1Text}
                onChange={handleInputField1Change}
              />
              <ClickableLine numberOfCircles={8} />
            </div>
          </div>
          <div className="col-md-10 col-6 mb-3">
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                className="vtm-attribute-input"
                type="text"
                style={{ width: "46%" }}
                value={inputField2Text}
                onChange={handleInputField2Change}
              />
              <ClickableLine numberOfCircles={8} />
            </div>
          </div>
          <div className="col-md-10 col-6 mb-3">
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                className="vtm-attribute-input"
                type="text"
                style={{ width: "46%" }}
                value={inputField3Text}
                onChange={handleInputField3Change}
              />
              <ClickableLine numberOfCircles={8} />
            </div>
          </div>
          <div className="col-md-10 col-6 mb-3">
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                className="vtm-attribute-input"
                type="text"
                style={{ width: "46%" }}
              />
              <ClickableLine numberOfCircles={8} />
            </div>
          </div>
          <div className="col-md-10 col-6 mb-3">
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                className="vtm-attribute-input"
                type="text"
                style={{ width: "46%" }}
              />
              <ClickableLine numberOfCircles={8} />
            </div>
          </div>
          <div className="col-md-10 col-6 mb-3">
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                className="vtm-attribute-input"
                type="text"
                style={{ width: "46%" }}
              />
              <ClickableLine numberOfCircles={8} />
            </div>
          </div>
          <div className="col-md-10 col-6 mb-3">
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                className="vtm-attribute-input"
                type="text"
                style={{ width: "46%" }}
              />
              <ClickableLine numberOfCircles={8} />
            </div>
          </div>
          <div className="col-md-10 col-6 mb-3">
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                className="vtm-attribute-input"
                type="text"
                style={{ width: "46%" }}
              />
              <ClickableLine numberOfCircles={8} />
            </div>
          </div>
          <div className="col-md-10 col-6 mb-3">
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                className="vtm-attribute-input"
                type="text"
                style={{ width: "46%" }}
              />
              <ClickableLine numberOfCircles={8} />
            </div>
          </div>
        </div>
        <div className="col md-2 pr-2 d-flex justify-content-center align-items-center">
          <div className="col justify-content-center">
            <div className="col-md-10 text-center">
              <label>Сознательность/Убежденность</label>
              <div style={{ textAlign: "right" }}>
                <ClickableLine numberOfCircles={4} />
              </div>
            </div>
            <div className="col-md-10 text-center">
              <label>Самоконтроль/Инстинкты</label>
              <div style={{ textAlign: "right" }}>
                <ClickableLine numberOfCircles={4} />
              </div>
            </div>
            <div className="col-md-10 text-center">
              <label>Смелость</label>
              <div style={{ textAlign: "right" }}>
                <ClickableLine numberOfCircles={4} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4 justify-content-center">
        <div className="col justify-content-center">
          <div className="center-container">
            <div className="arrow-label-container">
              <div className="arrow left-arrow" style={{ left: "-60px" }}>
                <div className="arrow-line" style={{ width: "60px" }}></div>
              </div>
              <span className="label">Пороки/Добродетели</span>
              <div className="arrow right-arrow" style={{ right: "-60px" }}>
                <div className="arrow-line" style={{ width: "60px" }}></div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <textarea
              style={{ paddingBottom: "5px", marginTop: "2px" }}
              rows={8}
            />
          </div>
        </div>
        <div className="col justify-content-center">
          <div className="center-container">
            <div className="arrow-label-container">
              <div className="arrow left-arrow" style={{ left: "-60px" }}>
                <div className="arrow-line" style={{ width: "60px" }}></div>
              </div>
              <span className="label">Человечность/Путь</span>
              <div className="arrow right-arrow" style={{ right: "-60px" }}>
                <div className="arrow-line" style={{ width: "60px" }}></div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <hr
              style={{
                height: 5,
              }}
            />
            <ClickableLine numberOfCircles={10} />
          </div>
          <div className="center-container">
            <div className="arrow-label-container">
              <div className="arrow left-arrow" style={{ left: "-95px" }}>
                <div className="arrow-line" style={{ width: "95px" }}></div>
              </div>
              <span className="label">Сила воли</span>
              <div className="arrow right-arrow" style={{ right: "-95px" }}>
                <div className="arrow-line" style={{ width: "95px" }}></div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <ClickableLine numberOfCircles={10} />
            <ClickableSquares numberOfSquares={10} />
          </div>
          <div className="center-container">
            <div className="arrow-label-container">
              <div className="arrow left-arrow" style={{ left: "-90px" }}>
                <div className="arrow-line" style={{ width: "90px" }}></div>
              </div>
              <span className="label">Запас крови</span>
              <div className="arrow right-arrow" style={{ right: "-90px" }}>
                <div className="arrow-line" style={{ width: "90px" }}></div>
              </div>
            </div>
          </div>
          <div style={{ width: "50%", alignItems: "center" }}>
            <ClickableSquares numberOfSquares={30} />
          </div>
        </div>
        <div className="col justify-content-center">
          <div className="center-container">
            <div className="arrow-label-container">
              <div className="arrow left-arrow" style={{ left: "-60px" }}>
                <div className="arrow-line" style={{ width: "60px" }}></div>
              </div>
              <span className="label">Здоровье</span>
              <div className="arrow right-arrow" style={{ right: "-60px" }}>
                <div className="arrow-line" style={{ width: "60px" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VtMCharacterStats;
