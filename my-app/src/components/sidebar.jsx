import React from 'react'

function SidebarItem({ sidebar }) {
  return (
    <div className="sidebar__item">
      <a className="sidebar__link" href={sidebar.link}>
        <img
          className="sidebar__img"
          src={sidebar.img}
          alt={"day's playlist"}
        />
      </a>
    </div>
  )
}

function SidebarPersonal({ sidebar }) {
  return (
    <div className="sidebar__personal">
      <p className="sidebar__personal-name">{sidebar.name}</p>
      <div className="sidebar__icon">
        <svg alt="logout">
          <use xlinkHref="img/icon/sprite.svg#logout"></use>
        </svg>
      </div>
    </div>
  )
}

export function Sidebar() {
  return (
    <div className="main__sidebar sidebar">
      <SidebarPersonal
        sidebar={{
          name: 'Sergey.Ivanov',
        }}
      />
      <div className="sidebar__block">
        <div className="sidebar__list">
          <SidebarItem
            sidebar={{
              img: 'img/playlist01.png',
            }}
          />

          <SidebarItem
            sidebar={{
              img: 'img/playlist02.png',
            }}
          />

          <SidebarItem
            sidebar={{
              img: 'img/playlist03.png',
            }}
          />
        </div>
      </div>
    </div>
  )
}
