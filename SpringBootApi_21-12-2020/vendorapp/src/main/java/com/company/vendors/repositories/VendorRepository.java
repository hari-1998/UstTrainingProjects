package com.company.vendors.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.company.vendors.entities.Vendor;

public interface VendorRepository extends JpaRepository<Vendor, Integer> {

	@Query("select type,count(type) from vendor group by type")
	public List<Object[]> findTypeAndTypeCount();
}
