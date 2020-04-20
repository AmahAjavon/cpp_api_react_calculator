cmake_minimum_required(VERSION 3.0)

if(DEFINED ENV{VCPKG_ROOT} AND NOT DEFINED CMAKE_TOOLCHAIN_FILE)
  set(CMAKE_TOOLCHAIN_FILE "$ENV{VCPKG_ROOT}/scripts/buildsystems/vcpkg.cmake"
      CACHE STRING "")
endif()

if(DEFINED ENV{VCPKG_DEFAULT_TRIPLET} AND NOT DEFINED VCPKG_TARGET_TRIPLET)
  set(VCPKG_TARGET_TRIPLET "$ENV{VCPKG_DEFAULT_TRIPLET}" CACHE STRING "")
endif()

project(CalculatorAPI)

set(RESTBED_INCLUDE_DIR /Users/amah/vcpkg/installed/x64-osx-dynamic/include)
set(RESTBED_LIBRARY /Users/amah/vcpkg/packages/restbed_x64-osx-dynamic/lib/librestbed.a)

find_path(RESTBED_INCLUDE_DIR restbed)
include_directories(${RESTBED_INCLUDE_DIR})

find_library(RESTBED_LIBRARY restbed_LIB)
include_directories(${RESTBED_INCLUDE_DIR})
link_libraries(${RESTBED_LIBRARY})

add_executable(CalculatorAPI
    main.cpp
    CalcResourceFactory.cpp
    CalcService.cpp
    CalcServiceSettingsFactory.cpp)
target_link_libraries(CalculatorAPI ${RESTBED_LIBRARY})
target_include_directories(CalculatorAPI PUBLIC ${CMAKE_SOURCE_DIR}/include)
set_property(TARGET CalculatorAPI PROPERTY CXX_STANDARD 17)