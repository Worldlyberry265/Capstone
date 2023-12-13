package Sword.Group.FirstTask.dao;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;

import Sword.Group.FirstTask.model.Otp;
import Sword.Group.FirstTask.model.Users;

public interface UsersDAO { // Data Access Object

	ResponseEntity<Object> register(Users user);

	ResponseEntity<Object> LoginAndGetToken(Users user);
	
	ResponseEntity<Object> requestOTP(Users user);

	ResponseEntity<Object> verifyOTP(Otp otp);

	ResponseEntity<Object> changePass(Users user);

	ResponseEntity<Object> getDesiredDorms( String Location, String startDate, String endDate, int NumberOfGuests, String PriceDist,
									 int Rating, String Gender, boolean SharedKitchen, boolean Parking, int minPrice, int maxPrice);

	ResponseEntity<Object> getDormsTitles(String SearchedTitle);

	ResponseEntity<Object> getDormById(int id, String startDate, String endDate, int NumberOfGuests);

	ResponseEntity<Object> AddBooking(Map<String, Object>  bookingInfo);
	
	ResponseEntity<Object> getBookings(int id);
	
}
