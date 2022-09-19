import './App.css';

function App() {
  return (
    // header
    <div className=''>
      <div className="header flex-center sticky">
        <div > <img className='img-youtube' src="https://vudigital.co/wp-content/uploads/2021/12/you-tube-2017-seeklogo.com-4-01.png"></img> </div>
        <div className='search-all'>
          <div><input className='search' type="text" placeholder="Tìm kiếm" /></div>
          <div> <img className='icon-mic' src='https://png.pngtree.com/png-vector/20190329/ourlarge/pngtree-vector-microphone-icon-png-image_889487.jpg'></img></div>
        </div>
        <div className='flex-center'>
          <div><img className='icon-notification' src='https://o.remove.bg/downloads/f4942c4b-d6b6-4828-b7fc-4df9ab79b3bc/transparent-notifications-icon-bell-icon-notification-icon-5ddbecdfeb4390.0656749715746941119637-removebg-preview.png'></img></div>
          <div><img className='icon-camera' src='https://o.remove.bg/downloads/b819f115-cced-47df-9783-4700d3725b7b/image-removebg-preview.png'></img></div>
          <div><img className='avata' src='https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.6435-9/142444228_1112050505909904_7145401079080156666_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=nzckz70EmXwAX8tA7U8&_nc_ht=scontent.fsgn5-6.fna&oh=00_AT82AmpRYjIUfe19Sujz0ADy2Dm-8FJ6ibQV6R9xbCJeEg&oe=632BE5D3'></img></div>
        </div>
      </div>
      {/* uggestions(thanh goi y) */}
      <div className='suggestions sticky-suggestions '>
        <hr className='hr'></hr>
        <div className='flex-center'>
          <div className='sugges'>Tất cả</div>
          <div className='sugges'>Danh sách kết hợp</div>
          <div className='sugges'>Trực tiếp</div>
          <div className='sugges'>Trò chơi</div>
          <div className='sugges'>Âm nhạc</div>
          <div className='sugges'>Bóng đá</div>
          <div className='sugges'>Chương trình nấu ăn</div>
          <div className='sugges'>Trò chơi hành động phiêu lưu</div>
          <div className='sugges'>Thủ công</div>
          <div className='sugges'>Mới tải lên gần đây</div>
          <div className='sugges'>Đã xem</div>
          <div className='sugges'>Đề xuất mới</div>
        </div>
      </div>
      {/* section l */}
      <div className='section sticky-left '>
        <div className='color-section text '>
          <div className='flex-center'>
            <div><svg className='margin-section' xmlns="http://www.w3.org/2000/svg" width="21" height="20"><path d="M6.333 18.333a2.5 2.5 0 01-2.5-2.5v-5H3a.833.833 0 01-.59-1.422l7.5-7.5a.833.833 0 011.18 0l7.5 7.5a.833.833 0 01-.59 1.422h-.833v5a2.5 2.5 0 01-2.5 2.5H6.333zM10.5 3.678L4.959 9.22c.316.119.54.424.54.781v5.833c0 .46.374.834.834.834L8 16.666v-3.333c0-.92.746-1.666 1.667-1.666h1.666c.92 0 1.667.746 1.667 1.666v3.333h1.667c.46 0 .833-.372.833-.833V10c0-.357.225-.662.54-.78L10.5 3.677zm.833 9.655H9.667v3.333h1.666v-3.333z"></path></svg></div>
            <div>Trang chủ</div>
          </div>
          <div className='flex-center'>
            <div><svg className='margin-section' xmlns="http://www.w3.org/2000/svg" width="21" height="20"><path d="M10.5 2.517a7.483 7.483 0 100 14.966 7.483 7.483 0 000-14.966zM1.317 10a9.183 9.183 0 1118.367 0 9.183 9.183 0 01-18.367 0z" ></path><path d="M14.948 6.585a.743.743 0 00-.915-.915l-.075.026-5.25 2.1-.078.036a.742.742 0 00-.29.284l-.045.093-2.1 5.249-.025.075a.743.743 0 00.915.916l.076-.026 5.248-2.1.079-.037a.742.742 0 00.29-.283l.045-.093 2.1-5.25.025-.075zm-4.442 1.937a1.485 1.485 0 110 2.97 1.485 1.485 0 010-2.97z" ></path></svg></div>
            <div>Khám phá</div>
          </div>
          <div className='flex-center'>
            <div><svg className='margin-section' xmlns="http://www.w3.org/2000/svg" width="21" height="20"><path d="M15.5 1.667c.488 0 .87.416.83.902l-.063.764H18c.46 0 .833.373.833.834V7.5a3.333 3.333 0 01-3.308 3.333A7.068 7.068 0 0113 14.594v2.073h3.333a.833.833 0 010 1.666H4.667a.833.833 0 110-1.666h3.332L8 14.595l-.194-.154a7.057 7.057 0 01-2.332-3.608 3.334 3.334 0 01-3.303-3.162L2.167 7.5V4.167c0-.428.321-.78.736-.828L3 3.333h1.732L4.67 2.57a.833.833 0 01.831-.902h10zm-.906 1.666H6.406l.508 6.104a5.39 5.39 0 002.382 4.036.833.833 0 01.37.694v2.5h1.667v-2.5c0-.273.134-.53.358-.685l.182-.126a5.39 5.39 0 002.213-3.92l.508-6.103zM4.872 5H3.833v2.5c0 .824.599 1.509 1.385 1.643L4.872 5zm12.295 2.5V5h-1.04l-.345 4.143A1.667 1.667 0 0017.167 7.5z"></path></svg></div>
            <div>Shorts</div>
          </div>
          <div className='flex-center'>
            <div><svg className='margin-section' xmlns="http://www.w3.org/2000/svg" width="21" height="20"><path d="M6.333 11.667h.834a4.16 4.16 0 013.333 1.666 4.16 4.16 0 013.12-1.66l.213-.006h.834a4.167 4.167 0 014.166 4.166.833.833 0 01-1.66.098l-.01-.245a2.5 2.5 0 00-2.35-2.348l-.146-.005h-.834a2.5 2.5 0 00-2.5 2.5c0 .428-.321.78-.736.828l-.097.006a.833.833 0 01-.828-.737l-.01-.244a2.5 2.5 0 00-2.348-2.348l-.147-.005h-.834a2.5 2.5 0 00-2.5 2.5.833.833 0 11-1.666 0 4.167 4.167 0 013.986-4.162l.18-.004zm0-8.334a3.333 3.333 0 110 6.667 3.333 3.333 0 010-6.667zm8.334 0a3.333 3.333 0 110 6.667 3.333 3.333 0 010-6.667zM6.333 5a1.667 1.667 0 100 3.333 1.667 1.667 0 000-3.333zm8.334 0a1.667 1.667 0 100 3.333 1.667 1.667 0 000-3.333z"></path></svg></div>
            <div>Kênh đăng ký</div>
          </div>
          <div>
            <hr className='hr'></hr>
            <div className='flex-center'>
              <div><svg className='margin-section' xmlns="http://www.w3.org/2000/svg" width="21" height="20"><path fill-rule="evenodd" d="M6.333 11.667h.834a4.16 4.16 0 013.333 1.666 4.16 4.16 0 013.12-1.66l.213-.006h.834a4.167 4.167 0 014.166 4.166.833.833 0 01-1.66.098l-.01-.245a2.5 2.5 0 00-2.35-2.348l-.146-.005h-.834a2.5 2.5 0 00-2.5 2.5c0 .428-.321.78-.736.828l-.097.006a.833.833 0 01-.828-.737l-.01-.244a2.5 2.5 0 00-2.348-2.348l-.147-.005h-.834a2.5 2.5 0 00-2.5 2.5.833.833 0 11-1.666 0 4.167 4.167 0 013.986-4.162l.18-.004zm0-8.334a3.333 3.333 0 110 6.667 3.333 3.333 0 010-6.667zm8.334 0a3.333 3.333 0 110 6.667 3.333 3.333 0 010-6.667zM6.333 5a1.667 1.667 0 100 3.333 1.667 1.667 0 000-3.333zm8.334 0a1.667 1.667 0 100 3.333 1.667 1.667 0 000-3.333z"></path></svg></div>
              <div>Thư viện</div>
            </div>
            <div className='flex-center'>
              <div><svg className='margin-section' xmlns="http://www.w3.org/2000/svg" width="21" height="20"><path d="M9.667 15h-5a2.5 2.5 0 01-2.5-2.5V4.167a2.5 2.5 0 012.5-2.5h11.667a2.5 2.5 0 012.5 2.5V12.5a2.5 2.5 0 01-2.5 2.5h-5v1.667H13a.833.833 0 110 1.666H8a.833.833 0 110-1.666h1.667V15zm6.667-11.666H4.667a.833.833 0 00-.833.833V12.5c0 .46.373.834.833.834h11.667c.46 0 .833-.374.833-.834l1.665.016v-8.36l-1.665.01a.833.833 0 00-.833-.833z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M18.834 8.264l-.006.098-.025.123-.021.063-.03.068-.027.051-.063.093-.048.056-.036.037-1.75 1.667-.083.069a.91.91 0 01-1.072 0l-.083-.07-.072-.078a.802.802 0 010-1.021l.072-.079.256-.244h-3.137c-.483 0-.875-.373-.875-.833 0-.428.338-.78.773-.828l.102-.006h3.137l-.256-.244-.072-.078a.804.804 0 01.072-1.1.908.908 0 011.155-.07l.083.07 1.75 1.666.084.094.044.062.046.081.039.093.025.092.015.1.003.068z"></path></svg></div>
              <div>Video đã xem</div>
            </div>
            <div className='flex-center'>
              <div><svg className='margin-section' xmlns="http://www.w3.org/2000/svg" width="21" height="20"><path d="M6.333 18.333a2.5 2.5 0 01-2.5-2.5v-5H3a.833.833 0 01-.59-1.422l7.5-7.5a.833.833 0 011.18 0l7.5 7.5a.833.833 0 01-.59 1.422h-.833v5a2.5 2.5 0 01-2.5 2.5H6.333zM10.5 3.678L4.959 9.22c.316.119.54.424.54.781v5.833c0 .46.374.834.834.834L8 16.666v-3.333c0-.92.746-1.666 1.667-1.666h1.666c.92 0 1.667.746 1.667 1.666v3.333h1.667c.46 0 .833-.372.833-.833V10c0-.357.225-.662.54-.78L10.5 3.677zm.833 9.655H9.667v3.333h1.666v-3.333z"></path></svg></div>
              <div>Video của bạn</div>
            </div>
            <div className='flex-center'>
              <div><svg className='margin-section' xmlns="http://www.w3.org/2000/svg" width="21" height="20"><path d="M15.5 1.667c.488 0 .87.416.83.902l-.063.764H18c.46 0 .833.373.833.834V7.5a3.333 3.333 0 01-3.308 3.333A7.068 7.068 0 0113 14.594v2.073h3.333a.833.833 0 010 1.666H4.667a.833.833 0 110-1.666h3.332L8 14.595l-.194-.154a7.057 7.057 0 01-2.332-3.608 3.334 3.334 0 01-3.303-3.162L2.167 7.5V4.167c0-.428.321-.78.736-.828L3 3.333h1.732L4.67 2.57a.833.833 0 01.831-.902h10zm-.906 1.666H6.406l.508 6.104a5.39 5.39 0 002.382 4.036.833.833 0 01.37.694v2.5h1.667v-2.5c0-.273.134-.53.358-.685l.182-.126a5.39 5.39 0 002.213-3.92l.508-6.103zM4.872 5H3.833v2.5c0 .824.599 1.509 1.385 1.643L4.872 5zm12.295 2.5V5h-1.04l-.345 4.143A1.667 1.667 0 0017.167 7.5z"></path></svg></div>
              <div>Xem sau</div>
              </div>
            <div className='flex-center'>
              <div><svg className='margin-section' xmlns="http://www.w3.org/2000/svg" width="21" height="20"><path d="M10.5 2.517a7.483 7.483 0 100 14.966 7.483 7.483 0 000-14.966zM1.317 10a9.183 9.183 0 1118.367 0 9.183 9.183 0 01-18.367 0z" ></path><path d="M14.948 6.585a.743.743 0 00-.915-.915l-.075.026-5.25 2.1-.078.036a.742.742 0 00-.29.284l-.045.093-2.1 5.249-.025.075a.743.743 0 00.915.916l.076-.026 5.248-2.1.079-.037a.742.742 0 00.29-.283l.045-.093 2.1-5.25.025-.075zm-4.442 1.937a1.485 1.485 0 110 2.97 1.485 1.485 0 010-2.97z" ></path></svg></div>
              <div>Nhạc</div>
              </div>
            <div className='flex-center'>
              <div><svg className='margin-section' xmlns="http://www.w3.org/2000/svg" width="21" height="20"><path d="M6.333 11.667h.834a4.16 4.16 0 013.333 1.666 4.16 4.16 0 013.12-1.66l.213-.006h.834a4.167 4.167 0 014.166 4.166.833.833 0 01-1.66.098l-.01-.245a2.5 2.5 0 00-2.35-2.348l-.146-.005h-.834a2.5 2.5 0 00-2.5 2.5c0 .428-.321.78-.736.828l-.097.006a.833.833 0 01-.828-.737l-.01-.244a2.5 2.5 0 00-2.348-2.348l-.147-.005h-.834a2.5 2.5 0 00-2.5 2.5.833.833 0 11-1.666 0 4.167 4.167 0 013.986-4.162l.18-.004zm0-8.334a3.333 3.333 0 110 6.667 3.333 3.333 0 010-6.667zm8.334 0a3.333 3.333 0 110 6.667 3.333 3.333 0 010-6.667zM6.333 5a1.667 1.667 0 100 3.333 1.667 1.667 0 000-3.333zm8.334 0a1.667 1.667 0 100 3.333 1.667 1.667 0 000-3.333z"></path></svg></div>
              <div>Video đã thích</div>
              
              </div>
          </div>
          {/*  */}
          <hr className='hr'></hr>
          <h3 className='font-weight'>Kênh đăng ký</h3>
          <div>
            <div>
              <div className='flex-center margin-left'>
                <div> <img className='user-avt' src='https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img></div>
                <div className='margin-left'> Kiều Anh Tuấn</div>
                <div>
                  <div className='like margin-left'> <img className='heart ' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/OOjs_UI_icon_heart.svg/1200px-OOjs_UI_icon_heart.svg.png'></img></div>
                </div>
              </div>
            </div>
            {/*  */}
            <div>
              <div className='flex-center margin-left'>
                <div> <img className='user-avt' src='https://images.pexels.com/photos/919606/pexels-photo-919606.jpeg?auto=compress&cs=tinysrgb&w=1600'></img></div>
                <div className='margin-left'> Trấn Thành</div>
                <div>
                  <div className='like margin-left'> <img className='heart ' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/OOjs_UI_icon_heart.svg/1200px-OOjs_UI_icon_heart.svg.png'></img></div>
                </div>
              </div>
            </div>
            {/*  */}
            <div>
              <div className='flex-center margin-left'>
                <div> <img className='user-avt' src='https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img></div>
                <div className='margin-left'> Trường Giang</div>
                <div>
                  <div className='like margin-left'> <img className='heart ' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/OOjs_UI_icon_heart.svg/1200px-OOjs_UI_icon_heart.svg.png'></img></div>
                </div>
              </div>
            </div>
            {/*  */}
            <div>
              <div className='flex-center margin-left'>
                <div> <img className='user-avt' src='https://images.pexels.com/photos/2850287/pexels-photo-2850287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img></div>
                <div className='margin-left'> LyLy</div>
                <div>
                  <div className='like margin-left'> <img className='heart ' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/OOjs_UI_icon_heart.svg/1200px-OOjs_UI_icon_heart.svg.png'></img></div>
                </div>
              </div>
            </div>
            {/*  */}
            <div>
              <div className='flex-center margin-left'>
                <div> <img className='user-avt' src='https://images.pexels.com/photos/2179483/pexels-photo-2179483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img></div>
                <div className='margin-left'> Ngô Kiến Huy</div>
                <div>
                  <div className='like margin-left'> <img className='heart ' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/OOjs_UI_icon_heart.svg/1200px-OOjs_UI_icon_heart.svg.png'></img></div>
                </div>
              </div>
            </div>
            {/*  */}
            <div>
              <div className='flex-center margin-left'>
                <div> <img className='user-avt' src='https://images.pexels.com/photos/2529973/pexels-photo-2529973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img></div>
                <div className='margin-left'> Văn An</div>
                <div>
                  <div className='like margin-left'> <img className='heart ' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/OOjs_UI_icon_heart.svg/1200px-OOjs_UI_icon_heart.svg.png'></img></div>
                </div>
              </div>
            </div>
            {/*  */}
            <div>
              <div className='flex-center margin-left'>
                <div> <img className='user-avt' src='https://images.pexels.com/photos/2318554/pexels-photo-2318554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img></div>
                <div className='margin-left'> Cây Sen Đá</div>
                <div>
                  <div className='like margin-left'> <img className='heart ' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/OOjs_UI_icon_heart.svg/1200px-OOjs_UI_icon_heart.svg.png'></img></div>
                </div>
              </div>
            </div>
            {/*  */}
            <div>
              <div className='flex-center margin-left'>
                <div> <img className='user-avt' src='https://images.pexels.com/photos/3875821/pexels-photo-3875821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img></div>
                <div className='margin-left'> Thích Xem Phim</div>
                <div>
                  <div className='like margin-left'> <img className='heart ' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/OOjs_UI_icon_heart.svg/1200px-OOjs_UI_icon_heart.svg.png'></img></div>
                </div>
              </div>
            </div>
            {/*  */}
            <div>
              <div className='flex-center margin-left'>
                <div> <img className='user-avt' src='https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img></div>
                <div className='margin-left'> Mê Phim</div>
                <div>
                  <div className='like margin-left'> <img className='heart ' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/OOjs_UI_icon_heart.svg/1200px-OOjs_UI_icon_heart.svg.png'></img></div>
                </div>
              </div>
            </div>
            {/*  */}
            <div>
              <div className='flex-center margin-left'>
                <div> <img className='user-avt' src='https://images.pexels.com/photos/623919/pexels-photo-623919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img></div>
                <div className='margin-left'> Thích Bóng Đá</div>
                <div>
                  <div className='like margin-left'> <img className='heart ' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/OOjs_UI_icon_heart.svg/1200px-OOjs_UI_icon_heart.svg.png'></img></div>
                </div>
              </div>
            </div>

            {/*  */}
            <div>
              <div className='flex-center margin-left'>
                <div> <img className='user-avt' src='https://images.pexels.com/photos/2873479/pexels-photo-2873479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img></div>
                <div className='margin-left'> Maldini</div>
                <div>
                  <div className='like margin-left'> <img className='heart ' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/OOjs_UI_icon_heart.svg/1200px-OOjs_UI_icon_heart.svg.png'></img></div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}{/*  */}
          <hr className='hr'></hr>
          <h3 className='font-weight'>Khám phá</h3>
          <div>
            <svg className='margin-section' xmlns="http://www.w3.org/2000/svg" width="21" height="20"><path d="M6.333 18.333a2.5 2.5 0 01-2.5-2.5v-5H3a.833.833 0 01-.59-1.422l7.5-7.5a.833.833 0 011.18 0l7.5 7.5a.833.833 0 01-.59 1.422h-.833v5a2.5 2.5 0 01-2.5 2.5H6.333zM10.5 3.678L4.959 9.22c.316.119.54.424.54.781v5.833c0 .46.374.834.834.834L8 16.666v-3.333c0-.92.746-1.666 1.667-1.666h1.666c.92 0 1.667.746 1.667 1.666v3.333h1.667c.46 0 .833-.372.833-.833V10c0-.357.225-.662.54-.78L10.5 3.677zm.833 9.655H9.667v3.333h1.666v-3.333z"></path></svg>
            Trang chủ</div>
          <div>
            <svg className='margin-section' xmlns="http://www.w3.org/2000/svg" width="21" height="20"><path d="M10.5 2.517a7.483 7.483 0 100 14.966 7.483 7.483 0 000-14.966zM1.317 10a9.183 9.183 0 1118.367 0 9.183 9.183 0 01-18.367 0z" ></path><path d="M14.948 6.585a.743.743 0 00-.915-.915l-.075.026-5.25 2.1-.078.036a.742.742 0 00-.29.284l-.045.093-2.1 5.249-.025.075a.743.743 0 00.915.916l.076-.026 5.248-2.1.079-.037a.742.742 0 00.29-.283l.045-.093 2.1-5.25.025-.075zm-4.442 1.937a1.485 1.485 0 110 2.97 1.485 1.485 0 010-2.97z" ></path></svg>
            Khám phá</div>
          <hr className='hr'></hr>
          <h3 className='font-weight'>DỊCH VỤ KHÁC CỦA YOUTUBE</h3>
          <hr className='hr'></hr>
          <div>Giới thiệuBáo chíBản quyềnLiên hệ với chúng tôiNgười sáng tạoQuảng cáoNhà phát triển
            Điều khoảnQuyền riêng tưChính sách và an toànCách YouTube hoạt độngThử các tính năng mới
            © 2022 Google LLC</div>
        </div>
      </div>
      {/* Video */}
      <div className='cards'>
        <div className='card card-left'>
          <img className='card-image' src='https://i.pinimg.com/564x/e4/52/2d/e4522dee0d4f67e00e7eafd8dedab6c5.jpg'></img>
          <div className='card-content'></div>
          <div class="card-top">
            <h3 className='card-title'>United States Travel Articles • Expert Vagabond Adventure Travel Blog</h3>
            <div className='card-user'>
              <img className='card-user-avata' src='https://i.pinimg.com/280x280_RS/fa/8a/7e/fa8a7e1447dcb521d047df2c4147d9d9.jpg'></img>
              <div className='card-user-info'>
                <h4 className='card-user-name'>Evondev</h4>
                <div className='card-user-live'>BuzzFeed</div>
              </div>
            </div>

          </div>
          <div className='card-bottom'>
            <div className='card-view'>19N lượt xem</div>
            <div className='card-time'>7 ngày trước</div>
          </div>
        </div>
        {/*  */}
        <div className='card'>
          <img className='card-image' src='https://i.pinimg.com/564x/6f/a5/d2/6fa5d23cae7e06ed3ee57809bf817803.jpg'></img>
          <div className='card-content'></div>
          <div class="card-top">
            <h3 className='card-title'>United States Travel Articles • Expert Vagabond Adventure Travel Blog</h3>
            <div className='card-user'>
              <img className='card-user-avata' src='https://i.pinimg.com/280x280_RS/2e/29/2b/2e292b0e8ed424b3a1d4d775690146e5.jpg'></img>
              <div className='card-user-info'>
                <h4 className='card-user-name'>Evondev</h4>
                <div className='card-user-live'>BuzzFeed</div>
              </div>
            </div>

          </div>
          <div className='card-bottom'>
            <div className='card-view'>19N lượt xem</div>
            <div className='card-time'>7 ngày trước</div>
          </div>
        </div>
        {/*  */}
        <div className='card'>
          <img className='card-image' src='https://i.pinimg.com/564x/61/b9/49/61b94998fe7c770b3f86cc28c2af8a32.jpg'></img>
          <div className='card-content'></div>
          <div class="card-top">
            <h3 className='card-title'>United States Travel Articles • Expert Vagabond Adventure Travel Blog</h3>
            <div className='card-user'>
              <img className='card-user-avata' src='https://i.pinimg.com/280x280_RS/fa/8a/7e/fa8a7e1447dcb521d047df2c4147d9d9.jpg'></img>
              <div className='card-user-info'>
                <h4 className='card-user-name'>Evondev</h4>
                <div className='card-user-live'>BuzzFeed</div>
              </div>
            </div>

          </div>
          <div className='card-bottom'>
            <div className='card-view'>19N lượt xem</div>
            <div className='card-time'>7 ngày trước</div>
          </div>
        </div>
        {/*  */}
        <div className='card'>
          <img className='card-image' src='https://i.pinimg.com/564x/88/11/28/8811289e7dfd9894498d1ad2d2a03cbb.jpg'></img>
          <div className='card-content'></div>
          <div class="card-top">
            <h3 className='card-title'>United States Travel Articles • Expert Vagabond Adventure Travel Blog</h3>
            <div className='card-user'>
              <img className='card-user-avata' src='https://i.pinimg.com/280x280_RS/fa/8a/7e/fa8a7e1447dcb521d047df2c4147d9d9.jpg'></img>
              <div className='card-user-info'>
                <h4 className='card-user-name'>Evondev</h4>

                <div className='card-user-live'>BuzzFeed</div>
              </div>
            </div>

          </div>
          <div className='card-bottom'>
            <div className='card-view'>19N lượt xem</div>
            <div className='card-time'>7 ngày trước</div>
          </div>
        </div>
        {/*  */}
      </div>
      <div className='cards'>
        <div className='card card-left'>
          <img className='card-image' src='https://i.pinimg.com/564x/e4/52/2d/e4522dee0d4f67e00e7eafd8dedab6c5.jpg'></img>
          <div className='card-content'></div>
          <div class="card-top">
            <h3 className='card-title'>United States Travel Articles • Expert Vagabond Adventure Travel Blog</h3>
            <div className='card-user'>
              <img className='card-user-avata' src='https://i.pinimg.com/280x280_RS/fa/8a/7e/fa8a7e1447dcb521d047df2c4147d9d9.jpg'></img>
              <div className='card-user-info'>
                <h4 className='card-user-name'>Evondev</h4>
                <div className='card-user-live'>BuzzFeed</div>
              </div>
            </div>

          </div>
          <div className='card-bottom'>
            <div className='card-view'>19N lượt xem</div>
            <div className='card-time'>7 ngày trước</div>
          </div>
        </div>
        {/*  */}
        <div className='card'>
          <img className='card-image' src='https://i.pinimg.com/564x/6f/a5/d2/6fa5d23cae7e06ed3ee57809bf817803.jpg'></img>
          <div className='card-content'></div>
          <div class="card-top">
            <h3 className='card-title'>United States Travel Articles • Expert Vagabond Adventure Travel Blog</h3>
            <div className='card-user'>
              <img className='card-user-avata' src='https://i.pinimg.com/280x280_RS/fa/8a/7e/fa8a7e1447dcb521d047df2c4147d9d9.jpg'></img>
              <div className='card-user-info'>
                <h4 className='card-user-name'>Evondev</h4>
                <div className='card-user-live'>BuzzFeed</div>
              </div>
            </div>

          </div>
          <div className='card-bottom'>
            <div className='card-view'>19N lượt xem</div>
            <div className='card-time'>7 ngày trước</div>
          </div>
        </div>
        {/*  */}
        <div className='card'>
          <img className='card-image' src='https://i.pinimg.com/564x/61/b9/49/61b94998fe7c770b3f86cc28c2af8a32.jpg'></img>
          <div className='card-content'></div>
          <div class="card-top">
            <h3 className='card-title'>United States Travel Articles • Expert Vagabond Adventure Travel Blog</h3>
            <div className='card-user'>
              <img className='card-user-avata' src='https://i.pinimg.com/280x280_RS/fa/8a/7e/fa8a7e1447dcb521d047df2c4147d9d9.jpg'></img>
              <div className='card-user-info'>
                <h4 className='card-user-name'>Evondev</h4>
                <div className='card-user-live'>BuzzFeed</div>
              </div>
            </div>

          </div>
          <div className='card-bottom'>
            <div className='card-view'>19N lượt xem</div>
            <div className='card-time'>7 ngày trước</div>
          </div>
        </div>
        {/*  */}
        <div className='card'>
          <img className='card-image' src='https://i.pinimg.com/564x/88/11/28/8811289e7dfd9894498d1ad2d2a03cbb.jpg'></img>
          <div className='card-content'></div>
          <div class="card-top">
            <h3 className='card-title'>United States Travel Articles • Expert Vagabond Adventure Travel Blog</h3>
            <div className='card-user'>
              <img className='card-user-avata' src='https://i.pinimg.com/280x280_RS/fa/8a/7e/fa8a7e1447dcb521d047df2c4147d9d9.jpg'></img>
              <div className='card-user-info'>
                <h4 className='card-user-name'>Evondev</h4>

                <div className='card-user-live'>BuzzFeed</div>
              </div>
            </div>

          </div>
          <div className='card-bottom'>
            <div className='card-view'>19N lượt xem</div>
            <div className='card-time'>7 ngày trước</div>
          </div>
        </div>
        {/*  */}

      </div>
      <div className='cards'>
        <div className='card card-left'>
          <img className='card-image' src='https://i.pinimg.com/564x/e4/52/2d/e4522dee0d4f67e00e7eafd8dedab6c5.jpg'></img>
          <div className='card-content'></div>
          <div class="card-top">
            <h3 className='card-title'>United States Travel Articles • Expert Vagabond Adventure Travel Blog</h3>
            <div className='card-user'>
              <img className='card-user-avata' src='https://i.pinimg.com/280x280_RS/fa/8a/7e/fa8a7e1447dcb521d047df2c4147d9d9.jpg'></img>
              <div className='card-user-info'>
                <h4 className='card-user-name'>Evondev</h4>
                <div className='card-user-live'>BuzzFeed</div>
              </div>
            </div>

          </div>
          <div className='card-bottom'>
            <div className='card-view'>19N lượt xem</div>
            <div className='card-time'>7 ngày trước</div>
          </div>
        </div>
        {/*  */}
        <div className='card'>
          <img className='card-image' src='https://i.pinimg.com/564x/6f/a5/d2/6fa5d23cae7e06ed3ee57809bf817803.jpg'></img>
          <div className='card-content'></div>
          <div class="card-top">
            <h3 className='card-title'>United States Travel Articles • Expert Vagabond Adventure Travel Blog</h3>
            <div className='card-user'>
              <img className='card-user-avata' src='https://i.pinimg.com/280x280_RS/fa/8a/7e/fa8a7e1447dcb521d047df2c4147d9d9.jpg'></img>
              <div className='card-user-info'>
                <h4 className='card-user-name'>Evondev</h4>
                <div className='card-user-live'>BuzzFeed</div>
              </div>
            </div>

          </div>
          <div className='card-bottom'>
            <div className='card-view'>19N lượt xem</div>
            <div className='card-time'>7 ngày trước</div>
          </div>
        </div>
        {/*  */}
        <div className='card'>
          <img className='card-image' src='https://i.pinimg.com/564x/61/b9/49/61b94998fe7c770b3f86cc28c2af8a32.jpg'></img>
          <div className='card-content'></div>
          <div class="card-top">
            <h3 className='card-title'>United States Travel Articles • Expert Vagabond Adventure Travel Blog</h3>
            <div className='card-user'>
              <img className='card-user-avata' src='https://i.pinimg.com/280x280_RS/fa/8a/7e/fa8a7e1447dcb521d047df2c4147d9d9.jpg'></img>
              <div className='card-user-info'>
                <h4 className='card-user-name'>Evondev</h4>
                <div className='card-user-live'>BuzzFeed</div>
              </div>
            </div>

          </div>
          <div className='card-bottom'>
            <div className='card-view'>19N lượt xem</div>
            <div className='card-time'>7 ngày trước</div>
          </div>
        </div>
        {/*  */}
        <div className='card'>
          <img className='card-image' src='https://i.pinimg.com/564x/88/11/28/8811289e7dfd9894498d1ad2d2a03cbb.jpg'></img>
          <div className='card-content'></div>
          <div class="card-top">
            <h3 className='card-title'>United States Travel Articles • Expert Vagabond Adventure Travel Blog</h3>
            <div className='card-user'>
              <img className='card-user-avata' src='https://i.pinimg.com/280x280_RS/fa/8a/7e/fa8a7e1447dcb521d047df2c4147d9d9.jpg'></img>
              <div className='card-user-info'>
                <h4 className='card-user-name'>Evondev</h4>

                <div className='card-user-live'>BuzzFeed</div>
              </div>
            </div>

          </div>
          <div className='card-bottom'>
            <div className='card-view'>19N lượt xem</div>
            <div className='card-time'>7 ngày trước</div>
          </div>
        </div>
        {/*  */}

      </div>



    </div>

  );
}

export default App;