package com.company.vendors.services;

import java.util.List;

import com.company.vendors.entities.Vendor;

public interface VendorService {
	Vendor saveVendor (Vendor vendor);
	Vendor updateVendor (Vendor vendor);
	void deleteVendor (Vendor vendor);
	Vendor getVendorId(int id);
	List<Vendor> getAllVendors();
}
